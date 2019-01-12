<template>
	<div id="login">
		<header><i class="mintui mintui-back" @click="goback"></i>通用设置</header>
		<section>
			<mt-cell
			  title="账号信息"
			  to="/Account"
			  is-link style="width: 100vw;height: 40px;border-top: 1px solid #bbb;border-bottom:1px solid #bbb ;">
			</mt-cell>
			<mt-cell
			  title="新信息通知"
			  to="/New"
			  is-link style="border-top: 1px solid #bbb;border-bottom: 1px solid #bbb;">
			</mt-cell>
			
			<mt-cell title="大字体" style="width: 100vw;height: 40px;border-top: 1px solid #bbb;border-bottom: 1px solid #bbb;"><mt-switch v-model="value1"></mt-switch></mt-cell>
			
			<mt-cell
			  title="视频设置"
			  to="/Video"
			  is-link style="border-top: 1px solid #bbb;border-bottom: 1px solid #bbb;">
			</mt-cell>
			
			<mt-cell title="只使用WiFi上传大文件
" style="width: 100vw;height: 40px;border-top: 1px solid #bbb;border-bottom: 1px solid #bbb;"><mt-switch v-model="value2"></mt-switch></mt-cell>

			<mt-cell title="听筒模式" style="width: 100vw;height: 40px;border-top: 1px solid #bbb;border-bottom: 1px solid #bbb;"><mt-switch v-model="value3"></mt-switch></mt-cell>

			<mt-cell title="清楚缓存" is-link style="border-top: 1px solid #bbb ;border-bottom: 1px solid #bbb;"></mt-cell>
			<p>退出登录</p>
		</section>
	</div>
</template>

<script>
	import { Cell } from 'mint-ui';
	import { Switch } from 'mint-ui';
	export default{
		name:'Login',
		data(){
			return{
				value1:true,
				value2:true,
				value3:true
			}
		},
		methods:{
			goback(){
				history.go(-1)
			}
		}
	}
</script>

<style scoped>
	#login{
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
	a{
		text-decoration: none;
	}
	.mint-cell{
		margin-top: 15px;
	}
	section p{
		width: 100vw;height: 40px;border-top: 1px solid #bbb;border-bottom:1px solid #bbb ;line-height: 40px;text-align: center;margin-top: 80px;
	}
</style>