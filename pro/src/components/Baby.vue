<template>
	<div id="baby">
		<header><i class="mintui mintui-back" @click="goback"></i>
			宝贝信息
		</header>
		<section>
			<div class="opt">选择宝贝性别及孕期</div>
			<ul class="spt">
				<router-link to='/babyInfo' tag='li'>男宝贝</router-link>
				<router-link to='/babyInfo' tag='li'>女宝贝</router-link>
				<router-link to='/Com' tag='li'>孕期</router-link>
			</ul>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Baby',
		methods:{
			goback(){
				history.go(-1)
			}
		}
	}
</script>

<style scoped>
	#baby{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	section{flex: 1;overflow: auto;}
	.glyphicon{
		font-size: 24px;
		color: #C5C5C5 ;
		position: absolute;
		left: 16px;
		top: 14px;
	}
	.opt{
		position: absolute;
		left: 33vw;
		top: 100px;
		width: 162px;
		height: 25px;
		color: rgba(65, 80, 88, 1);
		font-size: 18px;
		text-align: left;
		font-family: PingFangSC-regular;

	}
	.spt{
		position: absolute;
		left: 17vw;
		top: 170px;
		display: flex;
	}
	.spt li{
		width: 80px;
		height: 80px;
		background: #eee;
		border-radius: 50%;
		list-style: none;
		line-height: 80px;
		text-align: center;
		margin-right: 20px;
		color: #bbb;
	}
</style>