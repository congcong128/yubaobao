<template>
	<div id="hot">
		<div class="top">
			<router-link to='/care' tag="span">关注</router-link>
			<router-link to='/hot' tag="span">热门</router-link>
			<router-link to='/mine' tag="span">我的</router-link>
		</div>
		<div class="nav">
			<span tabindex="1">热门</span>
			<span tabindex="2">育儿</span>
			<span tabindex="3">吃货</span>
			<span tabindex="4">晒娃</span>
			<span tabindex="5">生活</span>
			<span tabindex="6">旅行</span>
		</div>
		<section>
			<ul>
			<li v-for="item in list">
				<div class="li-top">
					<img :src="item.touxiang"/>
					<div class="tit-r">
						<h4>{{item.username}}</h4>
						<time>{{item.sj}}</time>
						<div class="guanzhu">关注</div>	
					</div>
				</div>
				<div class="li-pic">
					<p>{{item.txt}}</p>
					<div class="pic-list">
						<div class="pic" v-for="pic in item.imgs">
							<img :src="pic.img"/>
						</div>
					</div>
				</div>
				<div class="li-bot">
					<router-link to='/care' tag="span">评论</router-link>
					<router-link to='/hot' tag="span">分享</router-link>
					<router-link to='/mine' tag="span">点赞</router-link>
				</div>
			</li>
		</ul>
		</section>
		<footer>
			<router-link to='/home' tag='span'>首页</router-link>
	    	<router-link to='/kecheng' tag='span'>课程</router-link>
	    	<router-link to='/baobaoji' tag='span'>宝宝记</router-link>
	    	<router-link to='/care' tag='span'>社区</router-link>
	    	<router-link to='/my' tag='span'>我的</router-link>
		</footer>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default{
		name:'Hot',
		data(){
			return{
				list:[]
			}
		},
		methods:{
			qingqiu(){
				console.log(this)
			}
		},
		mounted(){
			var oNav=document.getElementsByClassName("nav")[0];
			var aSpan=oNav.children;
			var _this=this;
			for (let i=0;i<aSpan.length;i++) {
				aSpan[i].onclick=function(){
					console.log(this.tabIndex)
					axios({
						method:'get',
						url:'http://www.baidu.com/shequ.list'
					}).then(function(data){
						//console.log(data.data.list)
						_this.list=data.data.list;
					})
				}
			}
			axios({
				method:'get',
				url:'http://www.baidu.com/shequ.list'
			}).then(function(data){
				//console.log(data.data.list)
				_this.list=data.data.list;
			})
		}
	}
</script>

<style scoped>
	#hot{height: 100vh;display: flex;flex-direction: column;}
	.top,.nav{height: 37px;text-align: center;}
	.nav{background: #F4F2F2;}
	.nav .active{border-bottom: 1px solid #BBBBBB;}
	.top span{line-height: 37px;padding: 6px 10px;margin:0 8px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Arial;}
	.nav span{line-height: 37px;padding: 6px 10px;color: rgba(16, 16, 16, 1);font-size: 12px;text-align: center;font-family: Arial;}
	section{flex: 1;overflow: auto;background: #EAE9E9;}
	section ul{margin-top: -10px;}
	section li{margin-top: 10px;background: #fff;}
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
	.li-bot{margin-top: 15px;border-top: 1px solid #EAE9E9;height: 37px;text-align: center;}
	.li-bot span{color: #939393;line-height: 37px;padding: 6px 10px;margin:0 8px;color: rgba(16, 16, 16, 1);font-size: 13px;text-align: center;font-family: Arial;}
</style>