<template>
	<div>
		<header><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>免费权益</header>
		<section>
			<ul>
				<li><router-link to='Course' tag='span'>精品课程5套</router-link><em>普通会员</em></li>
				<li><span @click="tap()">幸运抽奖</span><em>普通会员</em></li>
			</ul>
			<p>免费权益解释权归本平台所有</p>
		</section>
	</div>
	
</template>

<script>
	export default{
		name:'Free',
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			tap(){
				this.$router.push('/Mysign')
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
	section ul{
		width: 89.1vw;
		margin: 5.3%;
		margin-top: 54px;
	}
	section ul li{
		list-style: none;
		width: 89.1vw;
		height: 8vh;
		background: #F8F8F8 ;
		margin-bottom: 13px;
		display: flex;
	}
	section li span{
		width: 60vw;
		height: 8vh;
		display: block;
		line-height: 8vh;
		text-align: center;
	}
	section li em{
		width: 40vw;
		height: 8vh;
		background: #C5C5C5 ;
		display: block;
		line-height: 8vh;
		text-align: center;
		font-style: normal;
	}
	section p{
		width: 182px;
		height: 20px;
		color: #C5C5C5;
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
		margin: 20px auto;
	}
</style>