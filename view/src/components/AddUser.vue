<template>
<el-dialog title="用户" :visible.sync="dialogFormVisible" :center="iscenter" width='400px' @close="close" >
  <el-form :model="user" :rules="rules" ref="ruleForm">
    <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
      <el-input v-focus autocomplete="off" v-model="user.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
      <el-input type="password" autocomplete="off" v-model="user.password"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
      <el-input autocomplete="off" v-model="user.email"></el-input>
    </el-form-item>
    <el-form-item label="电话" :label-width="formLabelWidth" prop="mobile">
      <el-input autocomplete="off" v-model="user.mobile"></el-input>
    </el-form-item>
	  <el-form-item label="时间" :label-width="formLabelWidth" prop="data" >
	    <el-col :span="11">
	      <el-date-picker type="date" placeholder="选择日期" v-model="user.data" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
	    </el-col>
	   </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="resetForm('ruleForm')">取 消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
  </div>
</el-dialog>
</template>

<script>
	export default{
		data(){
				var checkPhone = (rule, value, callback) => {
				    const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
				    if (!value) {
				      return callback(new Error('电话号码不能为空'))
				    }
				    setTimeout(() => {
				      // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
				      // 所以我就在前面加了一个+实现隐式转换
				
				      if (!Number.isInteger(+value)) {
				        callback(new Error('请输入数字值'))
				      } else {
				        if (phoneReg.test(value)) {
				          callback()
				        } else {
				          callback(new Error('电话号码格式不正确'))
				        }
				      }
				    }, 100)
				  }
				  var checkEmail = (rule, value, callback) => {
				    const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
				    if (!value) {
				      return callback(new Error('邮箱不能为空'))
				    }
				    setTimeout(() => {
				      if (mailReg.test(value)) {
				        callback()
				      } else {
				        callback(new Error('请输入正确的邮箱格式'))
				      }
				    }, 100)
				  }
				  return{
		  	      iscenter:true,
			        width:'80px',
			        formLabelWidth: '80px',
					    dialogFormVisible:true,
			        user: {
			          name: '',
			          password: '',
			          email:'',
			          mobile:'',
			          data: ''
			        },
				 rules:{
		      	  name: [
		            { required: true, message: '请输入名字', trigger: 'blur' },
		            { min: 1, message: '长度在 1 到 5 个字符', trigger: 'blur' }
		          ],
		          password: [
		            { required: true, message: '请输入密码', trigger: 'change' }
		          ],
		          email: [
		            { validator: checkEmail, trigger: 'blur'  }
		          ],
		          mobile: [
		            {  validator: checkPhone, trigger: 'blur'  }
		          ],
		          data: [
		            { type: 'string', required: true, message: '请选择日期', trigger: 'change' }
		          ]
		          }
							}
						},
						methods:{
					    	submitForm(formName) {
					    		const {user}=this
					        this.$refs[formName].validate((valid) => {
					          if (valid) {
							    		this.$store.dispatch('addUser',this.user)
							    		this.dialogFormVisible=false
					          } else {
					            return false
					          }
					       	 })
						      },
						      resetForm(formName) {
						        this.$refs[formName].resetFields()
						        this.dialogFormVisible = false
						      
						      },
						      close(){
						      	this.$router.back()
						      }
							}
	}
</script>

<style>
</style>