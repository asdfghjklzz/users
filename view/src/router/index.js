import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import NotFound from '@/components/NotFound'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/Main',
      component: Main,
      meta: {
        islogin: true
      }
    },
		{
			path: "/404",
			name: "notFound",
			component: NotFound
		}, {
			path: "*", // 此处需特别注意置于最底部
			redirect: "/404"
		}
  ]
})

//跳转路由之前执行钩子函数
router.beforeEach((to,from,next)=>{
	if(to.meta.islogin){
		if(router.app.$cookies.isKey("name")&&router.app.$cookies.isKey("password")){
			next()
		}else{
			next({
				path:'/'
			})
		}
	}else{
		next()
	}
})

export default router