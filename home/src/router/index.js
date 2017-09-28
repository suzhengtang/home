import Vue from 'vue'
import Router from 'vue-router'
import regist from '@/components/regist'
import num from '@/components/num'
import password from '@/components/password'
import login from '@/components/login'
import removepassword from '@/components/removepassword'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'regist',
			component: regist
		},
		{
			path: '/num',
			name: 'num',
			component: num
		},
		{
			path: '/password',
			name: 'password',
			component: password
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/removepassword',
			name: 'removepassword',
			component: removepassword
		}
	]
})
