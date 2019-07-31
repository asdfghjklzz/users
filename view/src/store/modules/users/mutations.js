import {READ_USERS} from './types'
export default{
[READ_USERS] (state, {users}){
	//获取数据列表
	state.users=users
}
}
