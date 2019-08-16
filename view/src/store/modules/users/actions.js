import {READ_USERS,ADD_USER,DELETE_USER} from './types'
import axios from './../../../api/index.js'

export default {
//获取数据列表
readUsers ({commit}) {
	axios.post('/users/list','',(res)=>{
		if(res.status=='0')
			{
				commit(READ_USERS, {users:res.result})
			}
	   })
},
addUser({commit},user){
	axios.post('/users/userAdd',{user:user},(res)=>{
		if(res.status=='0')
			{
				user.id=res.result.insertId
				commit(ADD_USER,{user})
			}
	})
},
DeleteUser({commit},data){
	let id=data.id
	let index=data.index
	axios.get('/users/deleteUserById',{id},(res)=>{
		if(res.status=='0')
			{
				commit(DELETE_USER,{index})
			}
	})
}
}
