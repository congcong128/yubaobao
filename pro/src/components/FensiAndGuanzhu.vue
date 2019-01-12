<template>
	<div id="fensiandguanzhu">
		<header>
			<i class="mintui mintui-back" @click="goback"></i>
			{{title}}
		</header>
		<section>
			<router-view @toparent="getdata"></router-view>
		</section>
	</div>
</template>

<script>
	
	export default{
		name:'FensiAndGuanzhu',
		data(){
			return{
				arr:[],
				title: ''
			}
		},
		methods:{
			goback(){
				history.go(-1);
			},
			getdata(msg){
		  		this.title=msg
		  	}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	#fensiandguanzhu{height: 100vh;display: flex;flex-direction: column;}
	section{flex: 1;overflow: auto;background: #EAE9E9;}
	section ul{margin-top: 10px;}
	.tiao{height: 70px;border-bottom: 1px solid #bbb;background: #fff;padding: 15px 0 15px 24px;}
	.tiao img{width: 40px;height: 40px;float: left;border-radius: 50%;}
	.tiao h3{width: 130px;height: 40px;line-height: 40px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Arial;float: left;margin: 0 0 0 10px;}
	.tiao .yiguanzhu{float: right;margin: 5px 20px 5px 0;width: 71px;height: 30px;line-height: 30px;border-radius: 4px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Arial;border: 1px solid rgba(187, 187, 187, 1);}
</style>