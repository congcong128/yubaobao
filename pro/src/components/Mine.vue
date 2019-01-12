<template>
	<div id="mine">
		<div class="m-top">
			<i class="mintui mintui-back" @click="goback"></i>
		</div>
		<section>
			<div class="bg-box">
				<div class="touxiang">
					<div class="updatePic" @click="selectpic">
						<img src="../../static/img/lyf.jpg" id="img"/>
						<input type="file" accept="image/*" id="file"/>
					</div>
					
					<h3>宝宝妈妈</h3>
				</div>
				<div class="fensi">
					<span @click="fensiList">粉丝
						<b>12312</b>
					</span>
					<span @click="guanzhuList">关注
						<b>12312</b>
					</span>
					<div class="guanzhu">
						关注
					</div>
				</div>
			</div>
			<ul>
			<li v-for="item in list">
				<div class="li-top">
					<img :src="item.touxiang"/>
					<div class="tit-r">
						<h4>{{item.username}}</h4>
						<time>{{item.sj}}</time>
						
					</div>
				</div>
				<div class="li-pic">
					<p>{{item.txt}}</p>
					<div class="pic-list">
						<div class="pic" v-for="pic in item.imgs">
							<img :src="pic.img"/>
						</div>
					</div>
				</div>
				<div class="li-bot">
					<router-link to='/care' tag="span">评论</router-link>
					<router-link to='/hot' tag="span">分享</router-link>
					<router-link to='/mine' tag="span">点赞</router-link>
				</div>
			</li>
		</ul>
		</section>
	</div>
</template>
<script>
	import axios from 'axios';
	
	export default{
		name:'Mine',
		data(){
			return {
				tit:'我的',
				str:'',
				list:[]
			}
		},
		methods:{
			goback(){
				history.go(-1);
			},
			fensiList(){
				this.$router.push('/fensi')
			},
			guanzhuList(){
				this.$router.push('/guanzhu')
			},
			selectpic(){
				
			}
			
		},
		mounted(){
			this.$emit('toparent',this.tit);
			var _this=this;
			axios({
				method:'get',
				url:'http://www.baidu.com/shequ.list'
			}).then(function(data){
				//console.log(data.data.list)
				_this.list=data.data.list;
			})
		}
	}
	/*window.onload = function() {
		var fileTag = document.getElementById('file');	
		fileTag.onchange = function() {
			var file = fileTag.files[0];	
			var fileReader = new FileReader();
			fileReader.onloadend = function() {
				if(fileReader.readyState == fileReader.DONE) {	
					document.getElementById('img').setAttribute('src', fileReader.result);
					console.log(fileReader);
					a=fileReader.result;
					console.log(a);
				}	
			};	
			fileReader.readAsDataURL(file);
			
		}
	}*/
</script>

<style scoped>
	#mine{display: flex;height: 100vh;flex-direction: column;}
	.m-top{height: 37px;background: #F4F2F2;width: 100vw;}
	.m-top i{font-size: 20px;line-height: 37px;margin-left: 20px;font-style: normal;font-weight: 900;}
	section{flex: 1;overflow: auto;background: #EAE9E9;}
	.bg-box{width: 100vw;height: 168px;background: url(../../static/img/chengzhang.jpg) no-repeat center;background-size: cover;overflow: hidden;}
	.touxiang{height: 60px;margin-top: 34px;width: 300px;margin-left: 40px;}
	.updatePic{width: 60px;height: 60px;border-radius: 50%;float: left;position: relative;overflow: hidden;}
	.updatePic input{opacity: 0;position: absolute;top: 16px;left: 0;height: 60px;}
	.updatePic img{width: 60px;height: 60px;border-radius: 50%;}
	.touxiang h3{line-height: 60px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Arial;margin-left: 66px;margin-top: 0;}
	.fensi{width: 90vw;height: 30px; margin-left: 10vw;margin-top: 10px;line-height: 30px;position: relative;}
	.fensi span{margin-left: 5px;}
	.fensi .guanzhu{position: absolute;right: 10px;top: 0;width: 71px;height: 30px;line-height: 30px;border-radius: 4px;color: rgba(16, 16, 16, 1);font-size: 14px;background: #eee;text-align: center;font-family: Arial;}
	section ul{margin-top: -10px;}
	section li{margin-top: 10px;background: #fff;}
	.li-top,.li-pic,.li-bot{width: 83vw;margin-left: 8vw;}
	.li-top{height: 80px;padding: 20px 0;border-bottom: 1px solid #EAE9E9;}
	.li-top img{width: 40px;height: 40px;border-radius: 50%;float: left;}
	.tit-r{height: 40px;margin-left: 44px;position: relative;}
	.tit-r h4{margin: 0;line-height: 18px;font-size: 14px;font-family: Arial;padding-top: 4px;}
	.tit-r time{font-size: 12px;font-family: Arial;}
	.li-pic p{max-height: 70px;line-height: 20px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Arial;padding:10px 0 10px 0;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;}
	.pic-list{width: 83vw;overflow: hidden;}
	.pic{width: 26.66vw;height: 20vw;float: left;border: 1px solid;margin: 0.4vw;}
	.pic img{width: 100%;height: 100%;}
	.li-bot{margin-top: 15px;border-top: 1px solid #EAE9E9;height: 37px;text-align: center;}
	.li-bot span{color: #939393;line-height: 37px;padding: 6px 10px;margin:0 8px;color: rgba(16, 16, 16, 1);font-size: 13px;text-align: center;font-family: Arial;}
</style>