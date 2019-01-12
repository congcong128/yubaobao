<template>
	<div>
		<header><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>新信息通知</header>
		<section>
			<mt-cell title="新信息通知" style="width: 100vw;height: 30px;border-top: 1px solid #bbb;background: #F8F8F8; border-bottom: 1px solid #bbb;margin-top: 25px;"><mt-switch v-model="value1"></mt-switch></mt-cell>
			
			<mt-cell title="声音" style="width: 100vw;height: 30px;border-top: 1px solid #bbb;background: #F8F8F8; border-bottom: 1px solid #bbb;margin-top: 10px;"><mt-switch v-model="value2"></mt-switch></mt-cell>
			
			<mt-cell title="震动" style="width: 100vw;height: 30px;border-top: 1px solid #bbb;background: #F8F8F8; border-bottom: 1px solid #bbb;margin-top: 10px;"><mt-switch v-model="value3"></mt-switch></mt-cell>
			
			<mt-cell title="免打扰" style="width: 100vw;height: 30px;border-top: 1px solid #bbb;background: #F8F8F8; border-bottom: 1px solid #bbb;margin-top: 10px;"><mt-switch v-model="value4"></mt-switch></mt-cell>
			
			<mt-cell title="动态通知" style="width: 100vw;height: 30px;border-top: 1px solid #bbb;background: #F8F8F8; border-bottom: 1px solid #bbb;margin-top: 10px;"><mt-switch v-model="value5"></mt-switch></mt-cell>
			
			<mt-cell title="活动通知" style="width: 100vw;height: 30px;border-top: 1px solid #bbb;background: #F8F8F8; border-bottom: 1px solid #bbb;margin-top: 10px;"><mt-switch v-model="value6"></mt-switch></mt-cell>
			
			<mt-cell title="互动通知" style="width: 100vw;height: 30px;border-top: 1px solid #bbb;background: #F8F8F8; border-bottom: 1px solid #bbb;margin-top: 10px;"><mt-switch v-model="value7"></mt-switch></mt-cell>
		</section>
	</div>
</template>

<script>
	export default{
		name:'New',
		data(){
			return{
				value1:true,
				value2:true,
				value3:true,
				value4:true,
				value5:true,
				value6:true,
				value7:true
			}
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
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