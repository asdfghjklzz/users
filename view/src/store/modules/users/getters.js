export default{
	
	users (state) {
		return state.users 
	},
	total (state){
		return state.users.length
	},
	PageSize(){
		return ['5','10','20','30']
	}
	
}
