<template>
	<div id="guanzhu">
		<header>
			<i class="mintui mintui-back" @click="goback"></i>
			我关注的
		</header>
		<section>
			<ul>
				<li class="tiao" v-for="(item,i) in arr">
					<img :src="item.img"/>
					<h3>{{item.username}}妈妈</h3>
					<div class="yiguanzhu">
						已关注
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	import Mock from 'mockjs';
	Mock.mock('http://www.baidu.comg',{
		'users|10-20':[
				{
					"userid|+1":0,
					"username":"@cname",									
					"img":"@image('60x60', '@color()')"					
				}
			]
	})
	export default{
		name:'Guanzhu',
		data(){
			return{
				arr:[]
			}
		},
		methods:{
			goback(){
				history.go(-1);
			}
		},
		mounted(){
			var _this=this;
			axios({
				method:'get',
				url:'http://www.baidu.comg'
			}).then(function(data){
				console.log(data.data.users);
				_this.arr=data.data.users;
			})
		}
	}
</script>

<style scoped>
	#guanzhu{height: 100vh;display: flex;flex-direction: column;}
	section{flex: 1;overflow: auto;background: #EAE9E9;}
	section ul{margin-top: 10px;}
	.tiao{height: 70px;border-bottom: 1px solid #bbb;background: #fff;padding: 15px 0 15px 24px;}
	.tiao img{width: 40px;height: 40px;float: left;border-radius: 50%;}
	.tiao h3{width: 130px;height: 40px;line-height: 40px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Arial;float: left;margin: 0 0 0 10px;}
	.tiao .yiguanzhu{float: right;margin: 5px 20px 5px 0;width: 71px;height: 30px;line-height: 30px;border-radius: 4px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Arial;border: 1px solid rgba(187, 187, 187, 1);}
</style>