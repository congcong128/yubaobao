<template>
	<div>
		<header><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>签到有礼</header>
		<section>
			<aside>
				<router-link class="gra" to='Mysign' tag='div'>600分</router-link>
				<p>查看积分</p>
			</aside>
			<article>
				<ul>
					<li><span>精品课程</span><em @click="tap()">100积分兑换</em></li>
					<li><span>超级会员10天</span><em @click="tap()">400积分兑换</em></li>
					<li><span>好物优惠券50元</span><em @click="tap()">600积分兑换</em></li>
					<li><span>幸运抽奖</span><em @click="tap()">普通会员</em></li>
				</ul>
			</article>
		</section>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		name:'Sign',
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			tap(){
				Toast({
				  message: '兑换成功',
				  position: 'center',
				  duration: 3000
				});
			}
		}
	}
</script>

<style scoped="">
	header{
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: #eee;
		font-size: 18px;
	}
	
	.glyphicon{
		font-size: 24px;
		color: #C5C5C5 ;
		position: absolute;
		left: 16px;
		top: 14px;
	}
	aside .gra{
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
		width: 56px;
		height: 20px;
		color: #C5C5C5;
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
		margin: 0 auto;
		margin-top: -10px;
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
</style>