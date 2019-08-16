import {READ_USERS,ADD_USER,DELETE_USER} from './types'
export default{
[READ_USERS] (state, {users}){
	//获取数据列表
	state.users=users
},
[ADD_USER] (state, {user}){
	state.users.push(user)
},
[DELETE_USER] (state,{index}){
	state.users.splice(index,1)
}
}
