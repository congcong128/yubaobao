<template>
	<div>
		<header class="com"><span @click="quxiao()">取消</span>宝贝信息<em @click="tap()">保存</em></header>
		<div class="put">
			<span>预产期</span>
			<input type="text" />
		</div>
		<section>
			<div class="rat">与宝贝关系</div>
			<label class="mu"><input type="radio" name="relationship" value="" />妈妈 </label>
			<label class="fu"><input type="radio" name="relationship" value="" />爸爸 </label>
		</section>
		
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		name:'Com',
		methods:{
			quxiao(){
				this.$router.go(-1)
			},
			tap(){
				Toast({
				  message: '保存成功',
				  position: 'center',
				  duration: 5000
				});
			}
		}
	}
</script>

<style>
	.com{
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: #eee;
		font-size: 18px;
	}
	.com span{
		color: #888;
		float: left;
		margin-left: 20px;
	}
	.com em{
		color:#888;
		float: right;
		font-style: normal;
		margin-right: 20px;
	}
	.put{
		position: absolute;
		left: 4.8vw;
		top: 111px;
	}
	.put span{
		width: 48px;
		height: 22px;
		color: rgba(141, 141, 141, 1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.put input{
		width: 72.8vw;
		height: 40px;
		border-radius: 6px;
		text-align: left;
		border: 1px solid rgba(187, 187, 187, 1);
		margin-left: 15px;
		outline: none;
		padding-left: 10px;
	}
	section .rat{
		position: absolute;
		left: 37.1vw;
		top: 202px;
		width: 96px;
		height: 22px;
		color: rgba(165, 165, 165, 1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	section label{
		position: absolute;
		left: 38.4vw;
		top: 234px;
		color: rgba(163, 163, 163, 1);
		font-size: 16px;
		text-align: center;
		font-family: Arial;
		border: 1px solid rgba(255, 255, 255, 0);

	}
	section .fu{
		width: 50px;
		height: 38px;
		top: 268px;
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