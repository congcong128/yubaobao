<template>
	<div id="yijian">
		<header><i class="mintui mintui-back" @click="goback"></i>意见反馈<em @click="tap()">发送</em></header>
		<section>
			<textarea name="textarea" rows="8"  placeholder="问题及意见">
				
			</textarea>
			<div class="pic">
				<span>可上传三张</span>
			</div>
			<div class="lianxi">
				<h5>联系方式</h5>
				<input type="text" placeholder="电话/微信"/>
			</div>	
			<p>我们将认真阅读您的意见，并尽早回复。咨询更多问题，可拨打客服电话：410-555-6666.感谢您的支持！</p>
		</section>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		name:'Yijian',
		methods:{
			goback(){
				history.go(-1)
			},
			tap(){
				Toast({
				  message: '发送成功',
				  position: 'center',
				  duration: 3000
				});
			}
		}
	}
</script>

<style scoped>
	#yijian{
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
	header em{
		font-style: normal;
		color:#888;
		float: right;
		margin-right: 20px;
	}
	textarea{
		margin-top: 15px;
		width: 100vw;
	}
	.pic{
		width: 100vw;
		height: 140px;
		border:1px solid #bbb;
		margin-top: 20px;
		position: relative;
	}
	.pic span{
		position: absolute;
		bottom: 10px;
		right: 10px;
		color: #bbb;
	}
	.lianxi{width: 89vw;height: 50px;margin: 20px auto;}
	.lianxi input{width: 89vw;height: 30px;border: 1px solid #bbb;outline: none;padding-left: 10px;}
	p{width: 89vw;margin: 0 auto;margin-top: 117px;color: #888;}
</style>