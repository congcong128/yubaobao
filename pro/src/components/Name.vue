<template>
	<div>
		<header class="Name"><span @click="quxiao()">取消</span>设置头像<em @click="queding">确定</em></header>
		<div class="ipt">
			<input type="text" placeholder="小宝妈妈" />
			<div class="cin">请不要超过20个字符，可中英文.字符</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Name',
		methods:{
			quxiao(){
				this.$router.go(-1)
			},
			queding(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.Name{
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: #eee;
	}
	.Name span{
		color: #888;
		float: left;
		margin-left: 20px;
	}
	.Name em{
		color:#888;
		float: right;
		font-style: normal;
		margin-right: 20px;
	}
	.ipt input{
		width: 275px;
		height: 38px;
		border-radius: 6px;
		color: rgba(136, 136, 136, 1);
		font-size: 14px;
		text-align: left;
		padding-left: 5px;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(187, 187, 187, 1);
		position: absolute;
		left: 60px;
		top: 76px;
		outline: none;
	}
	.ipt .cin{
		position: absolute;
		left: 69px;
		top: 120px;
		color:rgba(136, 136, 136, 1) ;
		font-size: 14px;
	}
</style>