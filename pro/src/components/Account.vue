<template>
	<div>
		<header><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>账号信息</header>
		<section>
			<mt-cell
			  title="手机号码"
			  to="/Bindphone"
			  is-link
			  value="13788888888"
			  style="border-top: 1px solid #bbb;border-bottom: 1px solid #bbb;margin-top: 15px;">
			</mt-cell>  
			<mt-cell
			  title="登录密码"
			  to="/Bindlogin"
			  is-link
			  value="已设置"
			  style="border-top: 1px solid #bbb;border-bottom: 1px solid #bbb;margin-top: 10px;">
			</mt-cell>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Account',
		methods:{
			fanhui(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>

	
	.glyphicon{
		font-size: 24px;
		color: #C5C5C5 ;
		position: absolute;
		left: 16px;
		top: 14px;
	}
	
</style>