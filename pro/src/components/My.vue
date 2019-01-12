<template>
	<div id="my">
		<header>
		<i class="mintui mintui-back" @click="goback"></i>
			登录
		</header>
		<section>
			<div>
				<input type="text" name="tel" id="tel" value="" placeholder="输入手机号" v-model="tel"/>
				<input type="text" name="password" id="password" value="" placeholder="输入密码" v-model="password"/>
				<button class="btn btn-success" @click="login">登录</button>
			</div>
			账号：{{tel}}<br />
			密码：{{password}}
			<!--<form action="http://10.8.155.17:8081/baby/upload.do" method="post" class="form-horizontal" enctype="multipart/form-data">
				<div class="col-md-12">
					<div class="form-group">
						<label class="col-sm-3 control-label no-padding-right">文件域：</label>
						<div class="col-sm-9">
							<input type="text" name="uname"/>
							<input type="file"  name="upfiles" />
							<input type="file"  name="upfiles" />
						</div>
						<br/>
						<input type="submit" value="点击上传"/>
					</div>
				</div>
			</form>-->


		</section>
		<footer>
			<router-link to='/home' tag='span'>首页</router-link>
	    	<router-link to='/kecheng' tag='span'>课程</router-link>
	    	<router-link to='/baobaoji' tag='span'>宝宝记</router-link>
	    	<router-link to='/care' tag='span'>社区</router-link>
	    	<router-link to='/my' tag='span'>我的</router-link>
		</footer>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:"My",
		data(){
			return{
				tel:'',
				password:''
			}
		},
		methods:{
			goback(){
				history.go(-1)
			},
			login(){
				var _this=this;
				axios({
					method:'get',
					url:'http://47.107.246.156:8080/baby/lessons/list.do',
					/*params:{tel:_this.tel,password:_this.password}*/
					params:{ltid:1}
				}).then(function(data){
					console.log(data);
					/*if(data.statusText=="OK"){alert("充值成功")}*/
				})
			}
		}
	}
</script>

<style scoped>
	#my{height: 100vh;display: flex;flex-direction: column;}
	section{flex: 1;overflow: auto;}
	
</style>