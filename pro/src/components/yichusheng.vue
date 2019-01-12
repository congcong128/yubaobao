<template>
	<div id="yichusheng">
		<header>
			<i class="mintui mintui-back" @click="goback"></i>
			设置宝宝信息
		</header>
		<section>
			<div class="wid">
		        <div class="form-group">
		            <label for="babyname">宝宝小名：</label>
		            <input type="text" class="form-control" id="babyname" v-model="babyname">
		        </div>
		        <div class="form-group">
		            <label for="birthday">宝宝生日：</label>
		            <input type="date" class="form-control" id="babyname" v-model="birthday">
		        </div>
		        <div class="form-group">
		            <label for="occupation">宝宝性别：</label>
		            <select name="babysex" id="babysex" class="form-control" v-model="babysex">
		                <option value="男">男</option>
		                <option value="女">女</option>
		            </select>
		        </div>
		     
		        <mt-button class="to-l" @click='tohome'>保存</mt-button>
		    </div>
		</section>
	</div>
</template>

<script>
	export default{
		name:"Yichusheng",
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
				babyname:'',
				birthday:'',
				babysex:''
			}
		}
	}
</script>

<style scoped>
	a{text-decoration: none;}
	.to-l{width: 60vw;position: absolute;top: 60vh;left: 20vw;font-size: 15px;}
	.wid{width: 90vw;margin-left: 5vw;}


</style>