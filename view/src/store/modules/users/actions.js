import {READ_USERS} from './types'
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
}
}
