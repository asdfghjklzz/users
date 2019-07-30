/*localStorage浏览器本地存储*/
export default{
	saveLikes(Likes){
		window.localStorage.setItem("Like_key",JSON.stringify(Likes))
	},
	readLikes(){
		return JSON.parse(window.localStorage.getItem("Like_key")||'[]')
	}
}
