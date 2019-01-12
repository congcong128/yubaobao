<template>
	<div id="course">
		<header><i class="mintui mintui-back" @click="goback"></i>我的课程</header>
		<section>
			<ul>
				<li><span>课程<b class="glyphicon glyphicon-play-circle"></b></span><em>已购买<i class="glyphicon glyphicon-arrow-down"></i></em></li>
				<li><span>课程<b class="glyphicon glyphicon-play-circle"></b></span><em>已购买<i class="glyphicon glyphicon-arrow-down"></i></em></li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Course',
		methods:{
			goback(){
				history.go(-1)
			}
		}
		
	}
</script>

<style scoped="">
	#course{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.glyphicon-chevron-left{
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
	section ul{
		width: 89.1vw;
		margin: 5.3%;
		margin-top: 54px;
	}
	section ul li{
		list-style: none;
		width: 89.1vw;
		height: 8vh;
		margin-bottom: 13px;
		display: flex;
		border:1px solid #E3E1E1;
	}
	section li span{
		width: 50vw;
		height: 8vh;
		display: block;
		line-height: 8vh;
		text-align: center;
		background: #E3E1E1 ;
	}
	section li em{
		width: 50vw;
		height: 8vh;	
		display: block;
		line-height: 8vh;
		text-align: center;
		font-style: normal;
	}
	.glyphicon-play-circle{
		font-size: 24px;
		color: #868383 ;
	}
	
</style>