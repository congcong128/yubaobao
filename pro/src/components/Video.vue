<template>
	<div id="">
		<header><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>视频设置</header>
		<section>
			<mt-cell title="只用软件解码" style="border-top: 1px solid #bbb;background: #F8F8F8; border-bottom: 1px solid #bbb;margin-top: 15px;"><mt-switch v-model="value1"></mt-switch></mt-cell>
			
			<mt-cell title="边下载边播放" style="border-top: 1px solid #bbb;background: #F8F8F8; border-bottom: 1px solid #bbb;margin-top: 12px;"><mt-switch v-model="value2"></mt-switch></mt-cell>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Video',
		data(){
			return{
				value1:true,
				value2:true
			}
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
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
	a{
		text-decoration: none;
	}
</style>