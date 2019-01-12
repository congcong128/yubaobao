<template>
	<div id="member">
		<header><i class="mintui mintui-back" @click="goback"></i>
			会员中心
		</header>
		<section>
			<aside>
				<router-link class="xiang" to='Set'>头像</router-link>
				<p>妈妈</p>
				<em>普通用户</em>
			</aside>
			<article>
				<div class="main">
					<h4>会员权益</h4>
					<ul>
						<router-link to='/Sign' tag='li'>签到有礼</router-link>
						<router-link to='/Free' tag='li'>免费权益</router-link>
						<router-link to='/Birthday' tag='li'>生日权益</router-link>
						<li>更多权益</li>
					</ul>
				</div>
				<div class="mem">
					<h4>超级会员</h4>
					<router-link class="m-center" to='/SuperVIP' tag='div'>88元/3月</router-link>
					<p>超级会员可享受所有精品课程</p>
				</div>
				<div class="sug">
					<h4>会员规则介绍</h4>
					<p>注册用户在育宝宝关注的宝贝或者孕期不足两个月的为普通用户。</p>
					<p>注册用户成为普通用户后，可通过购买超级会员获得更高权益。</p>
				</div>
			</article>
		</section>
	</div>
</template>
	
<script>
	export default{
		name:'Member',
		methods:{
			goback(){
				history.go(-1)
			}
		}
	}
</script>

<style scoped>
	#member{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	.glyphicon{
		font-size: 24px;
		color: #C5C5C5 ;
		position: absolute;
		left: 16px;
		top: 14px;
	}
	section{
		flex: 1;
		overflow: auto;
	}
	aside{
		height: 124px;
		background: #F5F5F5 ;
		position: relative;
		
	}
	.xiang{
		position: absolute;
		left: 5.3vw;
		top: 21px;
		width: 82px;
		height: 82px;
		line-height: 82px;
		background-color: rgba(230, 229, 229, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		text-align: center;
		font-family: Arial;
		border: 1px solid rgba(255, 255, 255, 0);
		border-radius: 50%;
	}
	aside p{
		position: absolute;
		left: 28vw;
		top: 42px;
		width: 32px;
		height: 22px;
		color: rgba(102, 102, 102, 1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	aside em{
		position: absolute;
		left: 28vw;
		top: 62px;
		width: 56px;
		height: 20px;
		color: rgba(102, 102, 102, 1);
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
		font-style: normal;

	}
	.main{
		width: 89.1vw;
		margin: 5.3%;
	}
	.main li{
		list-style: none;
		width: 40vw;
		height: 16vh;
		border: 1px solid #bbb;
		line-height: 16vh;
		text-align: center;
		margin-bottom: 5vh;
	}
	.main ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.mem{
		width: 89.1vw;
		margin: 5.3%;
	}
	.mem .m-center{
		width: 40vw;
		height: 16vh;
		border: 1px solid #bbb;
		line-height: 16vh;
		text-align: center;
		background: #F6F7F8 ;
		margin: 0 auto;
		border-radius: 5px;
	}
	.mem p{
		width: 182px;
		height: 20px;
		color: rgba(114, 114, 114, 1);
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
		margin: 10px auto;
	}
	.sug{
		width: 89.1vw;
		margin: 5.3%;
	}
	.sug p{
		height: 45px;
		color: #666;
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;

	}
</style>