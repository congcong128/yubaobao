<template>
	<div id="massage">
		<header>
			<i class="mintui mintui-back" @click="goback"></i>
			评论与赞
		</header>
		<section>
			<div class="part">
				<div class="touxiang">
					<img src="../../static/img/lyf.jpg"/>
				</div>
				<div class="xinxi">
					<h3 class="tit">社区助手</h3>
					<time>10-08</time>
					<p>育宝宝最新活动来袭！快来参加赢好礼！你几级你哦就发的。育宝宝最新活动来袭！快来参加赢好礼！你几级你哦就发的</p>
				</div>
			</div>
			<div class="part">
				<div class="touxiang">
					<img src="../../static/img/lyf.jpg"/>
				</div>
				<div class="xinxi">
					<h3 class="tit">仙女妈妈</h3>
					<time>10-08</time><br />
					<em>评论了你</em>
					<p>育宝宝最新活动来袭！快来参加赢好礼！你几级你哦就发的。育宝宝最新活动来袭！快来参加赢好礼！你几级你哦就发的</p>
				</div>
			</div>
			<div class="part">
				<div class="touxiang">
					<img src="../../static/img/lyf.jpg"/>
				</div>
				<div class="xinxi">
					<h3 class="tit">卡西莫多</h3>
					<time>10-08</time><br />
					<em>赞了你</em>
					<p class="bg-deeper">育宝宝：最新活动来袭！快来参加赢好礼！你几级你哦就发的。</p>
				</div>
			</div>
			<span class="glyphicon glyphicon-search"></span>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Massage',
		data(){
			return{
				
			}
		},
		methods:{
			goback(){
				history.go(-1);
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped>
	#massage{display: flex;height: 100vh;flex-direction: column;}
	section{flex: 1;overflow: auto;}
	.part{border-bottom: 1px solid #bbb;}
	.touxiang{width: 60px;padding-top: 20px;float: left;}
	.touxiang img{width: 39px;height: 39px;border-radius: 50%;float: right;}
	.xinxi{padding-top: 20px;padding-left: 6px;margin-left: 60px;}
	.xinxi h3{margin: 0;font-size: 14px;color: #101010;}
	.xinxi time{line-height: 13px;height: 18px;color: rgba(193, 201, 206, 1);font-size: 13px;text-align: left;font-family: PingFangSC-regular;}
	.xinxi p{padding: 5px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: left;font-family: PingFangSC-regular;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
	.xinxi em{font-size: 14px;font-style: normal;color: #101010;}
	.xinxi .bg-deeper{background-color: #DFDFDF;border-radius: 6px;}
</style>