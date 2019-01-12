//此文件用于配置各路由组件的路由规则
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Massage from '@/components/Massage'
import Care from '@/components/Care'
import Hot from '@/components/Hot'
import Mine from '@/components/Mine'
import Pinglun from '@/components/Pinglun'
import Welcome from '@/components/Welcome'
import Yunqi from '@/components/Yunqi'
import Yichusheng from '@/components/Yichusheng'
import FensiAndGuanzhu from '@/components/FensiAndGuanzhu'
import Fensi from '@/components/Fensi'
import Guanzhu from '@/components/Guanzhu'
import Detail from '@/components/Detail'
import My from '@/components/My'
import Kecheng from '@/components/Kecheng'
import Baobaoji from '@/components/Baobaoji'
import Makepic from '@/components/makepic'
import Goumai from '@/components/goumai'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //redirect:'/welcome',
      name: 'Welcome',
      component: Welcome,
    },
    {
    	path:'/care',
    	name:'Care',
    	component:Care
    },
    {
    	path:'/hot',
    	name:'Hot',
    	component:Hot
    	
    },
    {
    	path:'/mine',
    	name:'Mine',
    	component:Mine
    },
    {
    	path:'/home',
    	name:'Home',
    	component:Home
    },
    {
    	path:'/yunqi',
    	name:'Yunqi',
    	component:Yunqi
    },
    {
    	path:'/yichusheng',
    	name:'Yichusheng',
    	component:Yichusheng
    },
    {
    	path:'/massage',
    	name:'Massage',
    	component:Massage
    },
    {
    	path:'/helloworld',
    	name:'Helloworld',
    	component:HelloWorld
    },
    /*{
    	path:'/fensiandguanzhu',
    	name:'FensiAndGuanzhu',
    	component:FensiAndGuanzhu,
    },*/
    {path:'/fensi',name:'Fensi',component:Fensi},
    {path:'/guanzhu',name:'Guanzhu',component:Guanzhu},
    {path:'/kecheng',name:'Kecheng',component:Kecheng},
    {path:'/baobaoji',name:'Baobaoji',component:Baobaoji},
    {path:'/my',name:'My',component:My},
    {path:'/detail',name:'Detail',component:Detail},
    {path:'/pinglun',name:'Pinglun',component:Pinglun},
    {path:'/makepic',name:'Makepic',component:Makepic},
    {path:'/goumai',name:'Goumai',component:Goumai}
  ]
})
