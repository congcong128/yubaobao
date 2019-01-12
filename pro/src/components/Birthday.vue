<template>
	<div id="">
		<header><span class="glyphicon glyphicon-chevron-left" @click="fanhui()"></span>生日权益</header>
		<section>
			<ul>
				<li><router-link to='Course' tag='span'>精品课程10套</router-link><em>生日奖励</em></li>
				<li><span @click="tap()">VIP一个月</span><em>生日奖励2</em></li>
			</ul>
			<p>生日月VIP尊享</p>
			<div class="photo">
				<b class="glyphicon glyphicon-picture"></b>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Birthday',
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			tap(){
				this.$router.push('/Member')
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
	
	.glyphicon-chevron-left{
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
		width: 93px;
		height: 20px;
		color: #101010;
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
		margin: 20px auto;
	}
	.photo{
		width: 200px;
		height: 120px;
		background: #DBDBDB;
		margin: 0 auto;
		position: relative;
		margin-top: 120px;
	}
	.photo .glyphicon-picture{
		font-size: 24px;
		color: #C4C4C4;
		position: absolute;
		top: 35%;
		left: 45%;
	}
</style>