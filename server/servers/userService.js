const db=require('./../mysql/dbConfig');
const url = require('url');

/*用户登录*/
exports.login=(req,res,next)=>{

	let loginForm=req.body.loginForm;
	let sql='select * from sys_user where name=? and password=?';
	let data=[loginForm.username,loginForm.password];
	db.base(sql,data,(response)=>{
		if(response.length==0){
			res.json({
				status:'1',
				msg:'无结果',
				result:''
			})
		}else{
			res.json({
				status:'0',
				msg:'查询成功',
				result:response[0]
			})
		}
	})
}
/*根据ID查询User*/
/*用户登录*/
exports.findUserById=(req,res,next)=>{
	
	
	var params = url.parse(req.url, true).query;
	let id=params.id;
	let sql='select * from sys_user where id=? ';
	let data=[id];
	console.log(id);
	db.base(sql,data,(response)=>{
		if(response.length==0){
			res.json({
				status:'1',
				msg:'无结果',
				result:''
			})
		}else{
			res.json({
				status:'0',
				msg:'查询成功',
				result:response[0]
			})
		}
	})
}

exports.userList=(req,res,next)=>{
	console.log("ssssss");
	let sql='select * from sys_user';
	let data=[];
	db.base(sql,data,(response)=>{
		if(response.length==0){
			res.json({
				status:'1',
				msg:'无结果',
				result:''
			})
		}else{
			res.json({
				status:'0',
				msg:'查询成功',
				result:response
			})
		}
	})
}
