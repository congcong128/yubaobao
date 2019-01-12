//此文件用于配置各路由组件的路由规则
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Massage from '@/components/Massage'
import Care from '@/components/Care'
import Hot from '@/components/hot'
import Mine from '@/components/Mine'
import Pinglun from '@/components/pinglun'
import Welcome from '@/components/welcome'
import Yunqi from '@/components/yunqi'
import Yichusheng from '@/components/yichusheng'
import FensiAndGuanzhu from '@/components/FensiAndGuanzhu'
import Fensi from '@/components/Fensi'
import Guanzhu from '@/components/Guanzhu'
import Detail from '@/components/Detail'
import My from '@/components/My'
import Kecheng from '@/components/Kecheng'
import Baobaoji from '@/components/Baobaoji'
import Makepic from '@/components/makepic'
import Goumai from '@/components/goumai'
/*以上是我的路径*/


//import HelloWorld from '@/components/HelloWorld'
//import My from '@/components/My'
import Info from '@/components/Info'
import Set from '@/components/Set'
import Name from '@/components/Name'
import Area from '@/components/Area'
import Baby from '@/components/Baby'
import BabyInfo from '@/components/BabyInfo'
import Com from '@/components/Com'
import Member from '@/components/Member'
import Sign from '@/components/Sign'
import Mysign from '@/components/Mysign'
import Free from '@/components/Free'
import Course from '@/components/Course'
import Birthday from '@/components/Birthday'
import SuperVIP from '@/components/SuperVIP'
import Login from '@/components/Login'
import Account from '@/components/Account'
import New from '@/components/New'
import Video from '@/components/Video'
import Bindphone from '@/components/Bindphone'
import Bindlogin from '@/components/Bindlogin'
//import Bindqq from '@/components/Bindqq'
//import Bindwx from '@/components/Bindwx'
//import Bindwb from '@/components/Bindwb'
//import Add from '@/components/Add'
//import Input from '@/components/Input'
import makepic from '@/components/makepic'
//import goumai from '@/components/goumai'
import Order from '@/components/Order'
import Yijian from '@/components/Yijian'
import Collect from '@/components/Collect'
//
///*以上是段晓飞*/
//
//
//import HelloWorld from '@/components/HelloWorld'
//import Shouye from '@/components/Shouye'
//// 课程
//import Kecheng from '@/components/Kecheng'
//import zao from '@/components/zao'
//import ke from '@/components/ke'
//import zixun from "@/components/zixun"
//import shikan from "@/components/shikan"
//import shikan_list from "@/components/shikan_list"
//import shikan_detail from "@/components/shikan_detail"
//import gou from "@/components/gou"
//
//import sheng from "@/components/sheng"
//import sheng_neng from "@/components/sheng_neng"
//import sheng_fen from "@/components/sheng_fen"
//import sheng_zhu from "@/components/sheng_zhu"
//import sheng_jiao from "@/components/sheng_jiao"
//import sheng_jiao1 from "@/components/sheng_jiao1"
//import sheng_jiao_ping from "@/components/sheng_jiao_ping"
//
//import shipu from "@/components/shipu"
//import shipu_fen from "@/components/shipu_fen"
//import shipu_yunqi from "@/components/shipu_yunqi"
//import shipu_jiaozuo from "@/components/shipu_jiaozuo"
//
//import ting from "@/components/ting"
//import ting_xiao from "@/components/ting_xiao"
//import ting_xiaobaitu from "@/components/ting_xiaobaitu"
//
//import Sou from '@/components/Sou'
//import She from '@/components/She'
//import Wo from '@/components/Wo'
////宝宝
//import bao from '@/components/bao'
//import bao_baobei from '@/components/bao_baobei'
//import b_q_y from '@/components/b_q_y'
//import b_q_y_n from '@/components/b_q_y_n'
//import b_q_y_x from '@/components/b_q_y_x'
//import b_q_y_x_f from '@/components/b_q_y_x_f'
//
//import b_q_y_y from '@/components/b_q_y_y'
//import bbz from '@/components/bbz'
//import bxc from '@/components/bxc'
//import bxcf from '@/components/bxcf'
//import bxcz from '@/components/bxcz'
//import bxczq from '@/components/bxczq'
//import bbzx from '@/components/bbzx'
//// 第一次
//import bdy from '@/components/bdy'
//import bdy1 from '@/components/bdy1'
//import bdyzd from '@/components/bdyzd'
//import bdynn from '@/components/bdynn'
////成长
//import bchengzhang from '@/components/bchengzhang'
//import bchengzhang_jilu from '@/components/bchengzhang_jilu'
//import bchengzhang_tianjia from '@/components/bchengzhang_tianjia'
////相册
//import bxiangce from '@/components/bxiangce'
//import bxiangce_footer from '@/components/bxiangce_footer'
//import bxiangce_nei from '@/components/bxiangce_nei'
//import bxiangce_xinjian from '@/components/bxiangce_xinjian'
//import bzhaopian_shangchuan from '@/components/bzhaopian_shangchuan'
//import xiangce from '@/components/xiangce'
//
//import a1 from '@/components/a1'

/*以上是茹燕斌的*/

Vue.use(Router)

export default new Router({
  routes: [
		{path: '/',name: 'Welcome',component: Welcome,},
		{path:'/care',name:'Care',component:Care},
		{path:'/hot',name:'Hot',component:Hot},
		{path:'/mine',name:'Mine',component:Mine},
		{path:'/home',name:'Home',component:Home},
		{path:'/yunqi',name:'Yunqi',component:Yunqi},
    {path:'/yichusheng',name:'Yichusheng',component:Yichusheng},
    {path:'/massage',name:'Massage',component:Massage},
    {path:'/helloworld',name:'Helloworld',component:HelloWorld},
    {path:'/fensi',name:'Fensi',component:Fensi},
    {path:'/guanzhu',name:'Guanzhu',component:Guanzhu},
    {path:'/kecheng',name:'Kecheng',component:Kecheng},
    {path:'/baobaoji',name:'Baobaoji',component:Baobaoji},
    {path:'/my',name:'My',component:My},
    {path:'/detail',name:'Detail',component:Detail},
    {path:'/pinglun',name:'Pinglun',component:Pinglun},
    {path:'/makepic',name:'Makepic',component:Makepic},
    {path:'/goumai',name:'Goumai',component:Goumai},
    
    /*------------以上是我写的-----------------------------------------------------*/
   	
// 	{
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld,
//  },
//  {
//    path:'/My',
//		  component:My
//		},
    {
    	path:'/Info',
    	component:Info
    },
    {
    	path:'/Set',
    	component:Set
    },
    {
    	path:'/Name',
    	component:Name
    },
    {
    	path:'/Area',
    	component:Area
    },
    {
    	path:'/Baby',
    	component:Baby,
    },
    {
    	path:'/babyInfo',
    	component:BabyInfo
    },
    {
    	path:'/Com',
    	component:Com
    },
    {
    	path:'/Member',
    	component:Member
    },
    {
    	path:'/Sign',
    	component:Sign
    },
    {
    	path:'/Mysign',
    	component:Mysign
    },
    {
    	path:'/Free',
    	component:Free
    },
    {
    	path:'/Course',
    	component:Course
    },
    {
    	path:'/Birthday',
    	component:Birthday
    },
    {
    	path:'/SuperVIP',
    	component:SuperVIP
    },
    {
    	path:'/Login',
    	component:Login
    },
    {
    	path:'/Account',
    	component:Account
    },
    {
    	path:'/New',
    	component:New
    },
    {
    	path:'/Video',
    	component:Video
    },
    {
    	path:'/Bindphone',
    	component:Bindphone
    },
    {
    	path:'/Bindlogin',
    	component:Bindlogin
    },
//  {
//  	path:'/Bindqq',
//  	component:Bindqq
//  },
//  {
//  	path:'/Bindwx',
//  	component:Bindwx
//  },
//  {
//  	path:'/Bindwb',
//  	component:Bindwb
//  },
//  {
//  	path:'/Add',
//  	component:Add
//  },
//  {
//  	path:'/Input',
//  	component:Input
//  },
    {
    	path:'/makepic',
    	component:makepic
    },
//  {
//  	path:'/goumai',
//  	component:goumai
//  },
    {
    	path:'/Order',
    	component:Order
    },
    {
    	path:'/Yijian',
    	component:Yijian
    },
    {
    	path:'/Collect',
    	component:Collect
    },
//  
//  /*以上是段晓飞-------------------------------------------------*/
// 	
// 	{
//    path: '/',
//    name: 'HelloWorld',
//    redirect: '/shouye',
//    component: HelloWorld,
//    children: [{
//        path: '/shouye',
//        component: Shouye
//      },
//      {
//        path: '/she',
//        component: She
//      },
//      {
//        path: '/wo',
//        component: Wo
//      },
//
//
//    ]
//
//  },
//  //  宝宝
//  {
//    path: '/a1',
//    component: a1
//  },
//  {
//    path: '/bao',
//    component: bao
//  },
//  {
//    path: '/bao_baobei',
//    component: bao_baobei
//  },
//  {
//    path: '/bbz',
//    component: bbz
//  },
//
//
//  {
//    path: '/bxc',
//
//    component: bxc,
//    children: [{
//        path: '/bbzx',
//        component: bbzx
//      },
//      {
//        path: '/bxiangce_nei',
//        component: bxiangce_nei
//      }
//
//      , {
//        path: '/bxczq',
//        component: bxczq
//      },
//      {
//        path: '/bzhaopian_shangchuan',
//        component: bzhaopian_shangchuan,
//      },
//      {
//        path: '/bxcf',
//        redirect: '/bxcz',
//        component: bxcf,
//        children: [{
//          path: '/bxcz',
//          component: bxcz,
//        }]
//      }
//    ]
//  },
//
//
//
//  //宝贝 第一次
//  {
//    path: '/bdy',
//    component: bdy,
//    children: [{
//        path: '/bdy1',
//        component: bdy1
//      },
//      {
//        path: '/bdyzd',
//        component: bdyzd
//      },
//
//      {
//        path: '/bdynn',
//        component: bdynn,
//      },
//
//
//    ]
//  },
//  //宝贝成长
//  {
//    path: '/bchengzhang',
//    component: bchengzhang,
//    children: [{
//        path: '/bchengzhang_jilu',
//        component: bchengzhang_jilu
//      },
//      {
//        path: '/bchengzhang_tianjia',
//        component: bchengzhang_tianjia
//      },
//    ]
//  },
//  //宝贝相册
//  {
//    path: '/bxiangce',
//    component: bxiangce,
//    children: [{
//        path: '/bxiangce_footer',
//        component: bxiangce_footer,
//        children: [{
//          path: '/bxiangce_nei',
//          component: bxiangce_nei
//        }]
//      },
//      {
//        path: '/bxiangce_xinjian',
//        component: bxiangce_xinjian,
//      },
//      {
//        path: '/bzhaopian_shangchuan/:uid',
//        component: bzhaopian_shangchuan,
//      },
//      {
//        path: '/xiangce',
//        component: xiangce,
//      }
//    ]
//  },
//
//
//  //亲友团
//  {
//    path: '/b_q_y',
//    redirect: 'b_q_y_n',
//    component: b_q_y,
//    children: [{
//        path: '/b_q_y_n',
//        component: b_q_y_n
//      },
//      {
//        path: '/b_q_y_x',
//        component: b_q_y_x,
//      },
//      {
//        path: '/b_q_y_x_f',
//        redirect: '/b_q_y_x',
//        component: b_q_y_x_f,
//        children: []
//      },
//      {
//        path: '/b_q_y_y',
//        component: b_q_y_y
//      }
//
//    ]
//  },
//  //课程
//  //ting
//  {
//    path: '/ting',
//    component: ting,
//    children: [
//
//      {
//        path: '/ting_xiao',
//        component: ting_xiao
//      },
//      {
//        path: '/ting_xiaobaitu/:mdType',
//        component: ting_xiaobaitu,
//      },
//    ]
//  },
//
//
//
//  {
//    path: '/kecheng',
//    component: Kecheng,
//  },
//  {
//    path: '/sheng',
//    component: sheng
//  },
//  {
//    path: '/sheng_jiao',
//    redirect: '/sheng_jiao1',
//    component: sheng_jiao,
//    children: [{
//        path: '/sheng_jiao1',
//        component: sheng_jiao1,
//      },
//      {
//        path: '/sheng_jiao_ping',
//        component: sheng_jiao_ping,
//      },
//    ]
//  },
//  {
//    path: '/sheng_neng',
//    redirect: '/sheng_fen',
//    component: sheng_neng,
//    children: [{
//        path: '/sheng_fen',
//        component: sheng_fen
//      },
//      {
//        path: '/sheng_zhu',
//        component: sheng_zhu
//      },
//    ]
//  },
//  {
//    path: '/shipu',
//    component: shipu,
//    children: [
//
//      {
//        path: '/shipu_fen',
//        component: shipu_fen,
//      },
//      {
//        path: '/shipu_yunqi',
//        component: shipu_yunqi,
//      },
//      {
//        path: '/shipu_jiaozuo',
//        component: shipu_jiaozuo,
//      },
//      {
//        path: '/sheng_jiao_ping',
//        component: sheng_jiao_ping,
//      },
//    ]
//
//  },
//  {
//    path: '/gou',
//    component: gou
//  },
//  {
//    path: '/sou',
//    component: Sou
//  },
//
//  {
//    path:'/zao/:ltid',
//    component: zao
//  },
//  {
//    path: '/ke/:leid',
//    component: ke
//  },
//  {
//    path: '/zixun',
//    component: zixun
//  },
//  {
//    path: '/shikan',
//    component: shikan,
//    children: [{
//        path: '/shikan_list',
//        component: shikan_list,
//      },
//      {
//        path: '/shikan_detail',
//        component: shikan_detail
//      }
//    ]
//  }
   
   
  ]
})
