<template>
	<div id="yunqi">
		<header>
			<i class="mintui mintui-back" @click="goback"></i>
			设置预产期
		</header>
		<section>
			<div class="wid">
		        <div class="form-group">
		            <input type="date" class="form-control" id="prodate" v-model="prodate">
		            <label for="prodate">请输入产检时医生告知的预产期</label>
		        </div>
		        <mt-button class="to-l" @click='tohome'>保存</mt-button>
		    </div>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Yunqi',
		methods:{
			goback(){
				history.go(-1);
			},
			tohome(){
				this.$router.push('/home')
			}
		},
		data(){
			return{
				prodate:''
			}
		}
	}
</script>

<style scoped>
	
	.to-l{width: 60vw;position: absolute;top: 60vh;left: 20vw;font-size: 15px;}
	.wid{width: 90vw;margin-left: 5vw;}
	.wid input{margin: 20px 0;}
</style>