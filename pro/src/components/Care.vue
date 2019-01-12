<template>
<div id="care">
	<div class="top">
		<router-link to='/care' tag="span">关注</router-link>
		<router-link to='/hot' tag="span">热门</router-link>
		<router-link to='/mine' tag="span">我的</router-link>
	</div>
	<section>
		<ul>
			<li v-for="item in list">
				<div class="li-top">
					<img :src="item.touxiang"/>
					<div class="tit-r">
						<h4>{{item.username}}</h4>
						<time>{{item.sj}}</time>
						<div class="guanzhu">已关注</div>
					</div>
				</div>
				<div class="li-pic">
					<router-link to="/detail" tag="p">{{item.txt}}</router-link>
					<div class="pic-list">
						<div class="pic" v-for="pic in item.imgs">
							<img :src="pic.img"/>
						</div>
					</div>
				</div>
				<div class="li-bot">
					<span @click="">评论</span>
					<span @click="isshow=!isshow">分享</span>
					<span>点赞</span>
				</div>
			</li>
		</ul>
		<div class="share-to" v-show="isshow">
			<p>分享到</p>
			<div class="share-list">
				<span>好友</span>
				<span>微信</span>
				<span>QQ</span>
				<span>微博</span>
			</div>
			<span class="concel" @click="isshow=false">
				取消
			</span>
		</div>
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
	//数据：头像img、username、时间yyyy.MM.dd、段落2-3句，图片1-9、
	import axios from 'axios';
	
	export default{
		name:'Care',
		data(){
			return{
				list:[],
				isshow:false
			}
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
			}
		},
		mounted(){
			var _this=this;
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
	#care{height: 100vh;display: flex;flex-direction: column;}
	.top{height: 37px;text-align: center;}
	.top span{line-height: 37px;padding: 6px 10px;margin:0 8px;left: 90px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Arial;}
	section{flex: 1;overflow: auto;background: #EAE9E9;}
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
	
	.share-to{width: 100vw;height: 120px;background: lightgray;position: fixed;bottom: 0;text-align: center;}
	.share-to p{margin: 10px 0;}
	.share-list{border-bottom: 1px solid #bbb;width: 80vw;margin: 0 auto;height: 30px;}
	.share-list span{padding: 5px;margin: 5px;}
	.share-to .concel{line-height: 40px;}
</style>