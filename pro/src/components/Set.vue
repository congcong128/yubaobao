<template>
	<div>
		<header class="set"><span @click="quxiao()">取消</span>设置头像<em @click="queding">确定</em></header>
		<section>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</section>
		<footer @click="shc">确定上传</footer>
	</div>
</template>

<script>
	export default{
		name:'Set',
		methods:{
			quxiao(){
				this.$router.go(-1)
			},
			queding(){
				this.$router.go(-1)
			},
			shc(){
				this.$router.go(-1)
			}
		}
	}
</script>
	
<style scoped="">
	.set{
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: #eee;
	}
	.set span{
		color: #888;
		float: left;
		margin-left: 20px;
	}
	.set em{
		color:#888;
		float: right;
		font-style: normal;
		margin-right: 20px;
	}
	section ul li{
		width: 80px;
		height: 80px;
		border: 1px solid #888;
		list-style: none;
		margin: 5px;
	}
	section ul{
		display: flex;
		flex-wrap: wrap;
		margin-left: 20px;
		margin-right: 20px;
		justify-content: space-around;
	}
	footer{
		position: absolute;
		left: 50%;
		bottom:27px ;
		margin-left: -137.5px;
		width: 275px;
		height: 40px;
		line-height: 40px;
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		text-align: center;
		font-family: Arial;
		border: 1px solid rgba(187, 187, 187, 1);
	
	}
</style>