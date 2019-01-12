<template>
	<div id="collect">
		<header><i class="mintui mintui-back" @click="goback"></i>我的收藏</header>
		<section>
			<ul>
				<li>育儿知识</li>
				<li>宝宝食谱</li>
				<li>能不能吃</li>
				<li>宝贝听听</li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Collect',
		methods:{
			goback(){
				history.go(-1)
			}
		}
	}
</script>

<style scoped>
	#collect{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	section{
		flex: 1;
		overflow: auto;
	}
	.glyphicon{
		font-size: 24px;
		color: #C5C5C5 ;
		position: absolute;
		left: 16px;
		top: 14px;
	}
	ul{
		width: 89vw;
		margin: 0 auto;
	}
	ul li{
		width: 89vw;
		height: 40px;
		list-style: none;
		background: #F2F2F3;
		line-height: 40px;
		text-align: center;
		margin: 20px 0;
	}
</style>