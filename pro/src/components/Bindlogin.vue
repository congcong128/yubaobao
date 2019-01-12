<template>
	<div>
		<header><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>登录密码<em @click="tap()">保存</em></header>
		<section>
			<mt-field label="旧密码" placeholder="请输入旧密码" type="password" v-model="password1" style="height: 37px;border-top: 1px solid #bbb;border-bottom: 1px solid #bbb;margin-top: 17px;"></mt-field>
			
			<mt-field label="新密码" placeholder="请输入新密码（至少6位）" type="password" v-model="password2"></mt-field>
			
			<mt-field label="确认密码" placeholder="再次输入密码" type="password" v-model="password3" style="height: 37px;border-top: 1px solid #bbb;border-bottom: 1px solid #bbb;"></mt-field>
		</section>
	</div>
</template>

<script>
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	export default{
		name:'Bindlogin',
		data(){
			return{
				password1:'',
				password2:'',
				password3:''
				
			}
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			tap(){
				Toast({
				  message: '保存成功',
				  position: 'center',
				  duration: 5000
				});
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
	header em{
		color:#888;
		float: right;
		font-style: normal;
		margin-right: 20px;
	}
	
</style>