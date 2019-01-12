<template>
	<div>
		<header class="area"><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>地区</header>
		<section>
			<select class="b-are">
				<option value="北京">北京</option>
				<option value="上海">上海 </option>
				<option value="深圳">深圳</option>
				<option value="杭州">杭州</option>
			</select>
			<select class="s-are">
				<option value="昌平">昌平</option>
				<option value="浦东">浦东</option>
				<option value="东莞">东莞</option>
			</select>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Area',
		methods:{
			fanhui(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.area{
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: #eee;
	}
	.glyphicon{
		font-size: 24px;
		color: #C5C5C5 ;
		position: absolute;
		left: 16px;
		top: 14px;
	}
	.b-are,.s-are{
		width: 86vw;
		height: 40px;
		line-height: 20px;
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(187, 187, 187, 1);
		margin: 0 auto;
		border-radius: 5px;
		outline: none;
	}
	.b-are{
		position: absolute;
		left: 7%;
		top: 70px;
	}
	.s-are{
		position: absolute;
		left: 7%;
		top: 130px;
	}
</style>