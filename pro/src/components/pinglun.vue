<template>
	<div id="pinglun">
		<header>
			<i class="mintui mintui-back" @click="goback"></i>
			阅读正文
			<em >发送</em>
		</header>
		<section>
			<textarea name="pinglun">
				
			</textarea>			
		</section>
	</div>
</template>

<script>
	export default{
		name:'Pinglun'
	}
</script>

<style scoped>
	header em{position: absolute;right: 10px;line-height: 37px;font-style: normal;}
</style>