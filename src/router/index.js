import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import Detailpage from '../pages/detail'
import forecastPage from '../pages/detail/forecast'
import publishPage from '../pages/detail/publish'
import countPage from '../pages/detail/count'
import analysisPage from '../pages/detail/analysis'
import orderList from '../pages/orderList'
Vue.use(Router)

export default new Router({
	 mode: 'hash',
	  routes: [
		{
		  path: '/',
		  component: IndexPage 
		},
		{
		  path: '/orderList',
		  component: orderList 
		},
		{
		  path: '/detail',
		  component: Detailpage ,
		  children:[
			  {
			    path: 'forecast',
			    component: forecastPage 
			  },
			  {
			    path: 'publish',
			    component: publishPage 
			  },
			  {
			    path: 'count',
			    component: countPage 
			  },
			  {
			    path: 'analysis',
			    component: analysisPage 
			  },
		  ]
		}
	  ]
})
