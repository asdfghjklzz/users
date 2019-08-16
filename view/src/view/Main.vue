<template>
<div>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" >用户列表</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown >
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item @click.native="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span v-html="username"></span>
    </el-header>
    
    <el-main>
      <el-table :data="users.filter(data => !search ||data.name.toLowerCase().includes(search.toLowerCase())).slice((currentPage - 1) * pagesize, currentPage * pagesize)">
        <el-table-column prop="id" label="ID" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="email" label="E-Mail">
        </el-table-column>
        <el-table-column prop="mobile" label="电话">
        </el-table-column>
        <el-table-column prop="data" label="日期"    >
        </el-table-column>
		 <el-table-column
		      align="right">
		      <template slot="header" slot-scope="scope">
		        <el-input
		          v-model="search"
		          size="mini"
		          placeholder="输入关键字搜索"/>
		      </template>
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="Delete(scope.$index,scope.row)">删除</el-button>
		      </template>
		  </el-table-column>
      </el-table>   
      <div style="margin-top: 20px;float: left;" >
		    <el-button @click="dialogFormVisible" >
		    	+
		    </el-button>
	  	</div>
	  	<div style="margin-left: 100px;margin-top: 24px;">
				<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-sizes="PageSize"
		      :page-size="pagesize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="total">
		    </el-pagination>
	  	</div>
    </el-main>
  </el-container>
</el-container>
<router-view></router-view>
</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
        username:this.$cookies.get("name"),
        search:'',
        currentPage:1,
        pagesize:5
      }
    },
    computed:{
    	...mapGetters(['users','total','PageSize'])
    }
    ,
    created(){
	    	this.$store.dispatch('readUsers')
	  
    },
    methods:{
    	exit(){
    		this.$cookies.remove("name")
    		this.$cookies.remove("password")
    		this.$router.push("/")
    	},
    	addUser(){
    		console.log(this.user)
    		//this.$store.dispatch('addUser',this.user)
    		//this.dialogFormVisible=false
    	},
      handleSizeChange(val) {
      	this.pagesize=val
      },
      handleCurrentChange(val) {
      	this.currentPage=val
      },
      dialogFormVisible(){
      	this.$router.push("/Main/AddUser")
      },
      Delete(index,row){
      	const data={
      		index:index,
      		id:row.id
      	}
      	this.$store.dispatch("DeleteUser",data)
      }
    }
/*    components:{
			AddUser
		}*/
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>