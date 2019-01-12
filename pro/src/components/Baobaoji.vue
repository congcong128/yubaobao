<template>
	<div id="baobaoji">
		<h1>这是<<宝宝记>>组件</h1>
		<footer>
			<router-link to='/home' tag='span'>首页</router-link>
	    	<router-link to='/kecheng' tag='span'>课程</router-link>
	    	<router-link to='/baobaoji' tag='span'>宝宝记</router-link>
	    	<router-link to='/care' tag='span'>社区</router-link>
	    	<router-link to='/my' tag='span'>我的</router-link>

		</footer>
	</div>
</template>

<script>
	export default{
		name:"Baobaoji"
	}
</script>

<style scoped>
	#baobaoji{height: 100vh;display: flex;flex-direction: column;}
	h1{flex: 1;}
</style>