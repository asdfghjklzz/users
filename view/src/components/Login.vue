<template>
	<el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h2 class="title" style="padding-left:22px;text-align: center;" >系统登录</h2>
    <span style="color: red;font-size:12px;margin-bottom: 3px;" v-show="ishow">用户名或密码错误</span>
    <el-form-item  prop="username" >
      <el-input type="text" v-focus v-model="loginForm.username" auto-complete="off" placeholder="账号"  @keyup.enter.native="focus"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input ref='password' type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码" @keyup.enter.native="submitForm('loginForm')"></el-input>
    </el-form-item>

    <el-form-item >
      <el-col class="line" :span="1">&nbsp;</el-col>
    </el-form-item>
  <el-form-item style="text-align: center;">
    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
    <el-button @click="resetForm('loginForm')">取消</el-button>
  </el-form-item>
  </el-form>
</template>

<script>
	import axios from 'axios'
	
	export default{
		data(){
			return{
			loginForm:{
				username:'',
				password:''
			},
			ishow:false
			,
			rules:{
			username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
            ],
            password: [
             { required: true, message: '请输入密码', trigger: 'blur' },
             { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
		}
			}
		},
	    methods: {
	      submitForm(formName) {
	        this.$refs.loginForm.validate((valid) => {
	          if (valid) {
	             axios.post('/users/login',{loginForm:this.loginForm}).then((response)=>{
	             	let res=response.data
	             	if(res.status=='0'){
	             		this.$cookies.set('name',res.result.name,30 * 60)
	             		this.$cookies.set('password',res.result.password,30 * 60)
	             		this.$router.push("/Main")
	             	}else{
	             		this.ishow=true
	             		setTimeout(()=>{
	             			this.ishow=false
	             		},3000)
	             	}
	             }).catch((error)=>{
	             	console.log(error);
	             })
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs.loginForm.resetFields();
	      },
	      focus(){
	      	this.$refs.password.focus()
	      }

	    }
	}
</script>

<style  scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
