<template>
	<div id="mysign">
		<header><i class="mintui mintui-back" @click="goback"></i>
			我的签到
		</header>
		<section>
			<aside>
				<div class="fra">20分</div>
				<p>已经签到4天</p>
				<ul>
					<li>+5</li>
					<li>+5</li>
					<li>+5</li>
					<li class="teshu">+5</li>
					<li>+5</li>
				</ul>
			</aside>
			<article>
				<h4>兑换优惠券</h4>
				<ul>
					<li><span>精品课程</span><em @click="tap()">100积分兑换</em></li>
					<li><span>超级会员10天</span><em @click="tap()">400积分兑换</em></li>
					<li><span>好物优惠券50元</span><em @click="tap()">600积分兑换</em></li>
				</ul>
			</article>
			<div class="last">
				<div class="fir">抽奖转盘</div>
				<p>一周抽奖3次</p>
			</div>
		</section>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		name:'Mysign',
		methods:{
			goback(){
				history.go(-1)
			},
			tap(){
				Toast({
				  message: '兑换成功',
				  position: 'center',
				  duration: 3000
				});
				this.$router.push('/Sign')
			}
		}
	}
</script>

<style scoped>
	#mysign{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.glyphicon{
		font-size: 24px;
		color: #C5C5C5 ;
		position: absolute;
		left: 16px;
		top: 14px;
	}
	section{
		flex: 1;
		overflow: auto;
	}
	aside .fra{
		width: 100px;
		height: 100px;
		line-height: 100px;
		color: #101010;
		font-size: 14px;
		text-align: center;
		font-family: Arial;
		border: 1px solid #bbb;
		border-radius: 50%;
		margin: 20px auto;
	}
	aside p{
		width: 130px;
		height: 30px;
		color: #101010 ;
		left: 122px;
		line-height: 30px;
		border-radius: 6px;
		font-size: 14px;
		text-align: center;
		font-family: Arial;
		border: 1px solid #bbb;
		margin: 0 auto;
		margin-top: -10px;
	}
	aside ul li{
		list-style: none;
		width: 40px;
		height: 40px;
		border: 1px solid #bbb;
		border-radius: 50%;
		margin: 8px;
		line-height: 40px;
		text-align: center;
		color: #101010;
	}
	aside ul{
		width: 100vw;
		display: flex;
		padding: 20px 14vw 0;
		margin: 0;
		border-bottom: 1px solid #bbb;
		text-align: center;
	}
	aside .teshu{
		background: #BEBEBE ;
	}
	article h4{
		margin-left: 9px;
		margin-top: 20px;
		color: #101010;
	}
	article ul{
		width: 89.1vw;
		margin: 5.3%;
		margin-top: 10px;
	}
	article ul li{
		list-style: none;
		width: 89.1vw;
		height: 8vh;
		background: #F8F8F8 ;
		margin-bottom: 13px;
		display: flex;
	}
	article li span{
		width: 60vw;
		height: 8vh;
		display: block;
		line-height: 8vh;
		text-align: center;
	}
	article li em{
		width: 40vw;
		height: 8vh;
		background: #C5C5C5 ;
		display: block;
		line-height: 8vh;
		text-align: center;
		font-style: normal;
	}
	.mint-toast{
		top: 35%;
		width: 200px;
		height: 50px;
		line-height: 20px;
		border-radius: 6px;
		color: #000;
		font-size: 14px;
		text-align: center;
		background: #fff;
		font-family: Arial;
		border: 1px solid rgba(187, 187, 187, 1);
	}
	.last .fir{
		width: 100px;
		height: 100px;
		border: 1px solid #bbb;
		border-radius: 50%;
		line-height: 100px;
		text-align: center;
		color: #101010;
		margin: 0 auto;
		margin-top: 40px;
	}
	.last p{
		width: 80px;
		height: 20px;
		color: #101010;
		font-size: 14px;
		margin: 10px auto;
	}
</style>