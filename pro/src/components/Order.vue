<template>
	<div id="order">
		<header><i class="mintui mintui-back" @click="goback"></i>我的订单</header>
		<section>
			<div class="tab">
				<span>全部</span>
				<span>待付款</span>
				<span>待发货</span>
				<span>待收货</span>
			</div>
			<ul>
				<li class="bbb" v-for="(item,i) in list">
					<img :src="item.touxiang"/>
					<p>{{item.username}}相册</p>
					<p>{{item.jiage}}元*1本</p>
					<span>
						已收货
					</span>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	import Mock from 'Mockjs';
	Mock.mock('http://www.baidu.com',{
		'list|4-8':[
				{
					"userid|+1":0,
					"touxiang":"@image('77x70', '@color()')",
					"username":"@cname()",
					"jiage":"@natural(60,100)"
					
				}
			]
	})

	export default{
		name:'Order',
		data(){
			return{
				list:[]
			}
		},
		methods:{
			goback(){
				history.go(-1)
			}
		},
		mounted(){
			var _this=this;
			axios({
				method:'get',
				url:'http://www.baidu.com'
			}).then(function(data){
				_this.list=data.data.list
				//console.log(data.data.list)
			})
		}
	}
</script>

<style scoped>
	#order{height: 100vh;display: flex;flex-direction: column;}
	
	section{flex: 1;overflow: auto;}
	.glyphicon{
		font-size: 24px;
		color: #C5C5C5 ;
		position: absolute;
		left: 16px;
		top: 14px;
	}
	.tab{
		width: 100vw;height: 38px;line-height: 38px;text-align: center;font-size: 14px;color: #101010;display: flex;justify-content: space-around;margin-top: 6px;border-bottom: 1px solid #bbb;
	}
	.tab span{
		margin-bottom: 8px;
	}
	.tab span:hover{
		color: #C5C5C5;
		border-bottom:1px solid #C5C5C5;
	}
	li{list-style: none;}
	ul{margin-top: 27px;border-top: 1px solid #bbb;}
	.bbb{height: 70px;border-bottom: 1px solid #bbb;position: relative;}
	.bbb img{width: 77px;height: 70px;float: left;}
	.bbb p{line-height: 20px;margin-left: 84px;font-size: 14px;height: 20px;}
	.bbb span{position: absolute;bottom: 10px;right: 10px;}
</style>