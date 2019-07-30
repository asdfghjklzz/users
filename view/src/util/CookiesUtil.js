/*cookies浏览器本地存储*/
export default={
	//设置cookie --this.$cookies.set(keyName, value[, expireTimes[, path[, domain[, secure]]]])  
	function setCookies(key,value){
		this.$cookies.set(key,value)  		
	}
	//获取cookie --this.$cookies.get(keyName)
	function getCookies(key){
		this.$cookies.get(key)	
	}
	//删除cookie --this.$cookies.remove(keyName [, path [, domain]]) 
	function delCookies(key){
		this.$cookies.remove(key) 
	}
	//判断cookie中是否存在指定键名
	function isExistCookies(key){
		return this.$cookies.isKey(key)	
	}
}
