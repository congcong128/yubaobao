<template>
	<div>
		<header><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>绑定手机号</header>
		<section>
			<select>
				<option value="+86">+86</option>
				<option value=""></option>
				<option value=""></option>
			</select>
			<input type="text" id="txt" placeholder="输入手机号"/>
			<button @click="tap()">绑定</button>
			<p>为保护账号安全，请绑定手机号码。绑定后可
以使用该手机号码登录育宝宝。</p>
		</section>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		name:'Bindphone',
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			tap(){
				Toast('绑定成功');
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
	section select{
		position: absolute;
		left: 20px;
		top: 70px;
		width: 70px;
		height: 30px;
		line-height: 20px;
		color: #101010;
		font-size: 14px;
		font-family: Arial;
		border: 1px solid #bbb;
		border-radius: 5px;
		outline: none;
	}
	#txt{
		position: absolute;
		left: 100px;
		top: 70px;
		width: 254px;
		height: 30px;
		border-radius: 6px;
		color: #101010;
		font-size: 14px;
		text-align: left;
		font-family: Microsoft Yahei;
		border: 1px solid #bbb;
		border-radius: 5px;
		outline: none;
		padding-left: 10px;
	}
	button{
		position: absolute;
		left: 52px;
		top: 160px;
		width: 270px;
		height: 30px;
		line-height: 20px;
		border-radius: 10px;
		background-color: rgba(197, 197, 197, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		text-align: center;
		font-family: Arial;
		border: 1px solid rgba(255, 255, 255, 0);
		outline: none;
	}
	section p{
		position: absolute;
		left: 46px;
		top: 255px;
		width: 282px;
		height: 45px;
		color: rgba(197, 197, 197, 1);
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;

	}
</style>