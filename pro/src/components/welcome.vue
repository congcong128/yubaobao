<template>
	<div class="w-box">
		<mt-swipe :auto="0" :continuous="false">
		  <mt-swipe-item>
		  	<h3 class="w-tit">母爱</h3>
			<img src="../../static/img/muai.png"/>
			<mt-button class="to-l">向左滑动</mt-button>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<h3 class="w-tit">成长</h3>
			<img src="../../static/img/muai.png"/>
			<mt-button class="to-l">向左滑动</mt-button>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<h3 class="w-tit">选择为您提供更好的服务</h3>
		  	<img src="../../static/img/muai.png"/>
		  	<div class="sel-two">
		  		<div class="sel-l" @click="jump1">孕期</div>
		  		<div class="sel-r" @click="jump2">已出生</div>
		  	</div>
		  </mt-swipe-item>
		</mt-swipe>
		
		
	</div>
</template>

<script>
	export default{
		name:'Welcome',
		methods:{
			jump1(){
				this.$router.push('/yunqi')
			},
			jump2(){
				this.$router.push('/yichusheng')
			}
		}
	}
	
	
		//myVideo.play(); 
		 
		
	
	 
</script>

<style>
	img{width: 100%;height: 100%;}
	.w-box{background: ghostwhite;height: 100vh;}
	.w-tit{text-align: center;width: 100%;position: absolute;top: 110px;left: 0;color: #111;}
	.to-l{width: 60vw;position: absolute;top: 80vh;left: 20vw;font-size: 15px;}
	.sel-two{
		display: flex;
		justify-content: space-around;
		position: absolute;
		left: 0px;
		top: 60vh;
		width: 100%;
		height: 100px;
		font-family: Arial;
	}
	.sel-two div{width: 100px;height: 100px;border: 1px solid rgba(187, 187, 187, 1);border-radius: 50%;text-align: center;line-height: 100px;font-size: 14px;color: #333;}
</style>