<template>
<div id="detail">
	<header>
		<i class="mintui mintui-back" @click="goback"></i>
			阅读正文
	</header>
	<section>
		<ul>
			<li>
				<div class="li-top">
					<img :src="list.touxiang"/>
					<div class="tit-r">
						<h4>{{list.username}}</h4>
						<time>{{list.sj}}</time>
						<div class="guanzhu">已关注</div>
					</div>
				</div>
				<div class="li-pic">
					<p>{{list.txt}}</p>
					<div class="pic-list">
						<div class="pic" v-for="pic in list.imgs">
							<img :src="pic.img"/>
						</div>
					</div>
				</div>
				<div class="li-bot">
					点赞
					<span class="glyphicon glyphicon-heart"></span>
					<span class="glyphicon glyphicon-star"></span>
					<span class="glyphicon glyphicon-warning-sign"></span>
					<span class="glyphicon glyphicon-eye-close"></span>
					
					<em><i>123</i>赞</em>
				</div>
			</li>
			<li class="pinglun-list">
				<div class="pinglun-tit">
					所有评论的人
				</div>
				<div class="pinglun" v-for="item in pinglun">
					<img :src="item.touxiang"/>
					<h3>{{item.username}}妈妈</h3>
					<time>{{item.sj}}</time>
					<p>{{item.txt}}</p>
					<span>点赞</span>
				</div>
			</li>
		</ul>
	</section>
</div>
</template>

<script>
	import axios from 'axios';
	import Mock from 'mockjs';
	Mock.mock('http://www.baidu.com/detail',{
		'list|1':[
			{
				"userid|+1":0,
				"touxiang":"@image('40x40', '@color()')",
				"username":"@cname",
				"sj":"@date(yyyy.MM.dd)",
				"txt":"@cparagraph(1,3)",
				"imgs|1-9":[{"img":"@image('100x80', '@color()')"}]	
			}
		],
		'pinglun|8-10':[
			{
				"userid|+1":0,
				"touxiang":"@image('40x40', '@color()')",
				"username":"@cname",
				"sj":"@date(yyyy.MM.dd)",
				"txt":"@cparagraph(1)"
			}
		]
	})
	export default{
		name:'Detail',
		data(){
			return{
				list:[],
				pinglun:[]
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
				url:'http://www.baidu.com/detail'
			}).then(function(data){
				console.log(data.data.list)
				_this.list=data.data.list;
				_this.pinglun=data.data.pinglun;
				console.log(data.data.pinglun)
			})
		}
	}
</script>

<style scoped>
	#detail{height: 100vh;display: flex;flex-direction: column;}
	section{flex: 1;overflow: auto;}
	section ul{background: #ddd;padding-top: 10px;}
	section .pinglun-list{margin-top: 20px;height: 100px;}
	section li{background: #fff;}
	.li-top,.li-pic,.li-bot{width: 83vw;margin-left: 8vw;}
	.li-top{height: 80px;padding: 20px 0;border-bottom: 1px solid #EAE9E9;}
	.li-top img{width: 40px;height: 40px;border-radius: 50%;float: left;}
	.tit-r{height: 40px;margin-left: 44px;position: relative;}
	.tit-r .guanzhu{position: absolute;right: 10px;top: 10px;width: 71px;height: 30px;line-height: 30px;border-radius: 4px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Arial;border: 1px solid rgba(187, 187, 187, 1);}
	.tit-r h4{margin: 0;line-height: 18px;font-size: 14px;font-family: Arial;padding-top: 4px;}
	.tit-r time{font-size: 12px;font-family: Arial;}
	.li-pic p{max-height: 70px;line-height: 20px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Arial;padding:10px 0 10px 0;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;}
	.pic-list{width: 83vw;overflow: hidden;}
	.pic{width: 26.66vw;height: 20vw;float: left;border: 1px solid;margin: 0.4vw;}
	.pic img{width: 100%;height: 100%;}
	.li-bot{margin-top: 15px;height: 37px;}
	.li-bot span{margin: 10px;}
	.li-bot em{float: right;line-height: 37px;}
	.li-bot i{color: red;}
	.pinglun-tit{width: 80vw;line-height: 40px;margin:0 auto;border-bottom: 1px solid #bbb;margin-bottom: 10px;}
	.pinglun{width: 80vw;position: relative;margin: 0 auto;}
	.pinglun img{width: 40px;height: 40px;border-radius: 50%;float: left;}
	.pinglun h3{margin: 0;font-size: 14px;margin-left: 46px;}
	.pinglun time{font-size: 12px;color: #939393;margin-left: 6px;}
	.pinglun p{font-size: 12px;color: #939393;margin-left: 46px;border-bottom: 1px solid #bbb;line-height: 30px;margin-bottom: 10px;}
	.pinglun span{position: absolute;right: 20px;top:10px;}
</style>