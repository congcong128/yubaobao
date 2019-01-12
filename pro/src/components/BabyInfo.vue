<template>
	<div id="babyInfo">
		<header><span @click="quxiao()">取消</span>宝贝信息<em @click="nex()">下一步</em></header>
		<section>
			<aside>
				<router-link class="tou" to='Set'>头像</router-link>
				<span>点击设置宝贝头像</span>
			</aside>	
			<form>
				<div>
					<span>昵称</span><input type="text" />
				</div>	
				<div>
					<span>生日</span><input type="text" />
				</div>
			</form>
			<article>
				<div class="rel">与宝贝的关系</div>
				<ul>
					<li><span class="glyphicon glyphicon-star"></span>妈妈</li>
					<li><span class="glyphicon glyphicon-star-empty"></span>爸爸</li>
					<li><span class="glyphicon glyphicon-star-empty"></span>其他</li>
				</ul>
			</article>
		</section>
	</div>
</template>

<script>
	export default{
		name:'BabyInfo',
		methods:{
			quxiao(){
				this.$router.go(-1)
			},
			nex(){
				this.$router.push('/Com')
			}
		}
	}
</script>

<style scoped>
	#babyInfo{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	section{flex: 1;overflow: auto;}
	header span{
		color: #888;
		float: left;
		margin-left: 20px;
	}
	header em{
		color:#888;
		float: right;
		font-style: normal;
		margin-right: 20px;
	}
	aside .tou{
		width: 56px;
		height: 56px;
		background: #eee;
		line-height: 56px;
		text-align: center;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 80px;
		margin-left: -28px;
		color: #68696A ;
	}
	aside span{
		font-style: normal;
		position: absolute;
		left: 50%;
		top: 144px;
		color: rgba(104, 105, 106, 1);
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
		margin-left: -60px;
	}
	form{
		position: absolute;
		left: 19px;
		top: 220px;
	}
	form span{
		font-size: 16px;
		color: #68696A;
	}
	form input{
		width: 75vw;
		height: 40px;
		border-radius: 6px;
		text-align: left;
		border: 1px solid rgba(187, 187, 187, 1);
		margin-left: 17px;
		margin-top: 5px;
		outline: none;
		padding-left: 10px;
	}
	article .rel{
		position: absolute;
		left: 37.1vw;
		top: 344px;
		width: 96px;
		height: 22px;
		color: rgba(165, 165, 165, 1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;

	}
	article ul{
		position: absolute;
		left: 16.8vw;
		top: 382px;
		width: 248px;
		height: 208px;
		line-height: 20px;
		border-radius: 13px 13px 13px 13px;
		background-color: rgba(255, 255, 255, 0.7);
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		text-align: center;
		font-family: Arial;

	}
	article ul li{
		list-style: none;
		width: 248px;
		height: 52px;
		border-bottom: 2px solid #eee;
		line-height: 52px;
		text-align: left;
		font-size: 19px;
	}
	article ul li>span{
		margin: 0 16px;
	}
</style>