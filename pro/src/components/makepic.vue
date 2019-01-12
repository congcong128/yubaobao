<template>
	<div id="makepic">
		<header>
		<i class="mintui mintui-back" @click="goback"></i>
			定制相册
	</header>
	<section>
		<div class="pic-box">
			<img :src="list.face"/>			
		</div>
		<p class="ti">尊享版</p>
		<div class="xiangqing">
			<h4>详情</h4>
			<p>{{list.txt}}</p>
			<p>{{list.jianjie}}</p>
		</div>
		<mt-button class="dingzhi" @click="goumai">立即定制</mt-button>
	</section>
	</div>
</template>

<script>
	import axios from 'axios';
	import Mock from 'mockjs';
	Mock.mock('http://www.baidu.com/makepic',{
		'list|1':[
			{
				"face":"@image('200x120', '@color()')",
				"txt":"@cparagraph(3,5)",
				"jianjie":"@cparagraph(1,2)",
				"tiao|3-6":[{"jianjie":"@cparagraph(1)"}],
				"jiage":"@natural(60,200)"
			}
		]
	})
	export default{
		name:"Makepic",
		data(){
			return{
				list:[]
			}
		},
		methods:{
			goback(){
				history.go(-1)
			},
			goumai(){
				this.$router.push('/goumai')
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
	#makepic{height: 100vh;display: flex;flex-direction: column;}
	header{width: 100%;height: 45px;color: rgba(16, 16, 16, 1);font-size: 18px;text-align: center;font-family: Microsoft Yahei;background: #E5E5E5 100%;line-height: 45px;position: relative;}
	header i{position: absolute;left: 20px;font-weight: 900;}
	section{flex: 1;overflow: auto;}
	.pic-box{width: 80vw;height: 48vw;margin: 35px auto 20px;}
	.pic-box img{width: 100%;height: 100%;}
	.ti{text-align: center;font-size: 18px;}
	.xiangqing{width: 90vw;margin-left: 5vw;}
	.xiangqing h4{margin: 0;padding: 0;font-size: 14px;color: #101010;}
	.xiangqing p{width: 90%;float: right;}
	.dingzhi{width: 40vw;height: 12vw;margin-left: 30vw;line-height: 12vw;margin-top: 30px;font-size: 16px;font-weight: 100;}
</style>