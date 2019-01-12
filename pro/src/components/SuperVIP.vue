<template>
	<div>
		<header><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>购买会员</header>
		<section>
			<div class="pri">88元/3月</div>
			<div class="pur" @click="tax()">立即购买</div>
			<ul>
				<li><span @click="tap()">3元优惠购买券</span><em @click="tap()">100积分兑换</em></li>
				<li><span @click="tap()">15元优惠购买券</span><em @click="tap()">500积分兑换</em></li>
			</ul>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	import { Toast } from 'mint-ui';
	export default{
		name:'SuperVIP',
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			tax(){
				var _this=this;
			  		axios({
			  			method:"post",
			  			url:'http://47.107.246.156:8080/baby/user/updatetime.do',
			  			params:{id:1}
			  		}).then(function(data){
			  			console.log(data)
			  			if(data.statusText=="OK"){
			  				let instance = Toast('购买成功三个月会员');
							setTimeout(() => {
								instance.close();
							}, 2000);
			  			}
			  		})
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
	section .pri{
		width: 150px;
		height: 80px;
		border: 1px solid #bbb;
		line-height: 80px;
		text-align: center;
		background: #F6F7F8 ;
		margin: 0 auto;
		border-radius: 5px;
		margin-top: 34px;
	}
	section .pur{
		width: 160px;
		height: 50px;
		border: 1px solid #bbb;
		line-height: 50px;
		text-align: center;
		margin: 40px auto;
	}
	section ul{
		width: 71.5vw;
		margin: 5.3% auto;
	}
	section ul li{
		list-style: none;
		width: 71.5vw;
		height: 8vh;
		margin-bottom: 13px;
		display: flex;
	}
	section li span{
		width: 40vw;
		height: 8vh;
		display: block;
		line-height: 8vh;
		text-align: center;
		border: 1px solid #bbb;
	}
	section li em{
		width: 40vw;
		height: 8vh;
		border: 1px solid #bbb;
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
		background:#F6F7F8 ;
		font-family: Arial;
		border: 1px solid rgba(187, 187, 187, 1);
	}
</style>