<template>
	<div id="home">
		<header>			
		  <div class="search-box">
		  	<span class="glyphicon glyphicon-search"></span>
		  	<input type="text" name="searcht" v-model="str" class="t-search"/>			  	
		  </div>
		  <button class="btn btn-default" type="button" @click="tomas">信息</button>
		</header>
		<section>
			<mt-swipe :auto="4000" class="swp">
			  <mt-swipe-item class="swp1" style="background:url(../../static/img/muai.jpg)">1</mt-swipe-item>
			  <mt-swipe-item class="swp2">2</mt-swipe-item>
			  <mt-swipe-item class="swp3">3</mt-swipe-item>
			  <mt-swipe-item class="swp2">4</mt-swipe-item>
			</mt-swipe>
			<div class="free-part">
				<h2>免费专区<span>新鲜有趣的内容</span></h2>
				<div class="par-box">
					<img src="../../static/img/lyf.jpg"/>
					<p class="jieshao">宝宝如何吃得好，这几件事不要做</p>
					<span class="glyphicon glyphicon-chevron-right more"></span>					
				</div>
			</div>
			<div class="free-part">
				<h2>好课精选<span>总有一款适合你</span></h2>
				<div class="par-box">
					<img src="../../static/img/lyf.jpg"/>
					<p class="jianjie">宝宝如何吃得好，这几件事不要做</p>
					<p>黄聪讲师</p>
					<p>1万元</p>
					<button class="btn">免费试听</button>
				</div>
				<div class="par-box second">
					<img src="../../static/img/lyf.jpg"/>
					<p class="jianjie">宝宝如何吃得好，这几件事不要做</p>
					<p>黄聪讲师</p>
					<p>1万元</p>
					<button class="btn">免费试听</button>
				</div>
			</div>
			<div class="free-part">
				<h2>精彩活动<span>活动抽奖</span></h2>
				<div class="ad-box">
					<h2>签到积分换会员</h2>
					<p>积分换会员</p>
					<p class="small">积分换会员</p>
					<span class="glyphicon glyphicon-chevron-right more"></span>					
				</div>
				<div class="ad-bot">
					<div class="botl">
						积分送课程
					</div>
					<div class="botr">
						积分送会员
					</div>
				</div>
			</div>
			<div class="free-part">
				<h2>热门话题<span>大家都在干什么</span></h2>
				<div class="bar">热门精选</div>
				<div class="ba">
					<h4>大家来育儿</h4>
					<div class="ba-box">
						<div class="ba-l">
							<div class="ba-top">
								<img src="../../static/img/lyf.jpg"/>
								<span>铁柱妈妈</span>
							</div>
							<p>宝宝又长大了，啦啦啦，我家宝宝萌萌的真可爱。。。。</p>
						</div>
						<div class="ba-r">
							<img src="../../static/img/lyf.jpg"/>
						</div>
					</div>
				</div>
				<div class="ba">
					<h4>教你做辅食</h4>
					<div class="ba-box">
						<div class="ba-l">
							<div class="ba-top">
								<img src="../../static/img/lyf.jpg"/>
								<span>铁柱妈妈</span>
							</div>
							<p>宝宝又长大了，啦啦啦，我家宝宝萌萌的真可爱。。。。</p>
						</div>
						<div class="ba-r">
							<img src="../../static/img/lyf.jpg"/>
						</div>
					</div>
				</div>
				<div class="ba">
					<h4>大家来晒娃</h4>
					<div class="ba-box">
						<div class="ba-l">
							<div class="ba-top">
								<img src="../../static/img/lyf.jpg"/>
								<span>铁柱妈妈</span>
							</div>
							<p>宝宝又长大了，啦啦啦，我家宝宝萌萌的真可爱。。。。</p>
						</div>
						<div class="ba-r">
							<img src="../../static/img/lyf.jpg"/>
						</div>
					</div>
				</div>
				
			</div>
				
			<div class="footer-bar"></div>
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
		name:'Home',
		data(){
			return{
				str:''
			}
		},
		methods:{
			tomas(){
				this.$router.push('/massage')
			},
			jump(){
				
			}
		},
		mounted(){
			/*this.$emit('toparent',this.tit);
			axios({
				method:'get',
				url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
				params:{uid:'11475'}
			}).then((data)=>{
				//console.log(data.data.data)
				this.list=data.data.data;
			})*/
		}
	}
</script>

<style scoped>
	#home{height: 100vh;display: flex;flex-direction: column;}
	section{flex: 1;overflow: auto;}
	.search-box{width: 80vw;height: 35px; float: left;border: 1px solid #aaa;background: #fff;border-radius: 5px;margin-top: 5px;margin-left: 5px;}
	.search-box input{width: 90%;height: 30px;float: left;border: 0;background: none;outline:none;}
	.search-box span{float: left;height: 35px;width: 10%;line-height: 35px;}
	.swp1{background: royalblue;}
	.swp2{background: orchid;}
	.swp3{background: olive;}
	.swp{width: 100vw;height: 200px;}
	.free-part{width: 90vw;margin: 0 auto;}
	.free-part h2 span{margin-left: 8px;font-size: 14px;color: #c5c5c5;}
	.par-box{height: 100px;line-height: 20px;text-align: center;box-shadow: 1px 1px 1px 1px rgba(223, 223, 223, 1);border: 1px solid rgba(187, 187, 187, 1);position: relative;}
	.par-box img{width: 98px;height: 98px;float: left;}
	.par-box .jieshao{width: 132px;max-height: 80px;color: rgba(149, 146, 146, 1);font-size: 12px;text-align: left;font-family: PingFangSC-regular;margin-left: 120px;margin-top: 18px;}
	.more{border-radius: 50%;position: absolute;right: 24px;top: 50%;width: 37px;height: 37px;line-height: 37px;text-align: center;border: 1px solid rgba(187, 187, 187, 1);color: #c5c5c5;font-size: 24px;margin-top: -18px;}
	.par-box .jianjie{width: 183px;height: 20px;line-height: 20px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 14px;margin: 8px 0 12px 120px;}
	.par-box p{text-align: left;margin-left: 120px;margin-bottom: 0;}
	.par-box .btn{position: absolute;right: 0;bottom: 12px;border-radius: 0;font-size: 12px;}
	.second{margin-top: 20px;}
	.footer-bar{width: 100vw;height: 10px;}
	.ad-box{background: #E5E5E5;text-align: left;height: 120px;padding-left: 70px;padding-top: 20px;position: relative;}
	.ad-box h2{margin-top: 0;font-size: 20px;}
	.ad-bot{height: 40px;}
	.ad-bot div{width: 50%;height: 40px;line-height: 40px;text-align: center;font-size: 14px;float: left;border: 1px solid #bbb;}
	.bar{height: 30px;line-height: 30px;border-radius: 6px;background-color: rgba(229, 229, 229, 1);color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Arial;border: 1px solid rgba(255, 255, 255, 0);}	
	.ba h4{font-size: 12px;}
	.ba-box{width: 100%;height: 90px;border: 1px solid #bbb;position: relative;}
	.ba-r{width: 166px;height: 88px;float: right;}
	.ba-r img{width: 166px;height: 88px;}
	.ba-l{min-width:120px;max-width:42vw;height: 88px;float: left;}
	.ba-l img{width: 27px;height: 27px;border-radius: 50%;float: left;margin: 5px;}
	.ba-l span{font-size: 14px;color: #E5E5E5;line-height: 40px;}
	.ba-l p{padding: 0 10px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;color: #B5B5B5;}
	
</style>