<template>
	<div id="goumai">
		<header>
		<i class="mintui mintui-back" @click="goback"></i>
			购买
	</header>
	<section>
		<div class="pic-box">
			<img :src="list.face"/>			
		</div>
		<p class="ti">尊享版</p>
		<div class="jiage">
			售价：{{list.jiage}}元
			<span>1本</span>
		</div>
		<mt-button class="dingzhi">立即购买</mt-button>
		<div class="xiangqing">
			<h4>详情</h4>
			<div class="ppp">
				<p v-for="(t,i) in list.tiao">{{i+1}}.{{t.jianjie}}</p>
			</div>
		</div>
	</section>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:"Goumai",
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
				url:'http://www.baidu.com/makepic'
			}).then(function(data){
				console.log(data.data.list)
				_this.list=data.data.list
			})
		}
	}
</script>

<style scoped>
	#goumai{height: 100vh;display: flex;flex-direction: column;}
	header{width: 100%;height: 45px;color: rgba(16, 16, 16, 1);font-size: 18px;text-align: center;font-family: Microsoft Yahei;background: #E5E5E5 100%;line-height: 45px;position: relative;}
	header i{position: absolute;left: 20px;font-weight: 900;}
	section{flex: 1;overflow: auto;}
	.pic-box{width: 80vw;height: 48vw;margin: 35px auto 20px;}
	.pic-box img{width: 100%;height: 100%;}
	.ti{text-align: center;font-size: 18px;}
	.xiangqing{width: 90vw;margin-left: 5vw;margin-top: 20px;}
	.xiangqing h4{margin: 0;padding: 0;font-size: 14px;color: #101010;}
	.xiangqing .ppp{width: 90%;float: right;background: #E5E5E5;color: #888;}
	.dingzhi{width: 40vw;height: 12vw;margin-left: 30vw;line-height: 12vw;margin-top: 30px;font-size: 16px;font-weight: 100;}
	.jiage{width: 60vw;margin: 0 auto;}
	.jiage span{float: right;}	
</style>