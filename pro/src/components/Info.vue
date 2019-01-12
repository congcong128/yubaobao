<template>
	<div id="info">
		<header><i class="mintui mintui-back" @click="goback"></i>
			个人信息
		</header>
		<section>
			<aside>
				<div>
					<ul>
						<router-link to='Set' tag='li'>头像<span>头像</span></router-link>
						<router-link to='Name' tag='li'>名字<b>&gt;</b></router-link>
					</ul>
				</div>
			</aside>
			<article>
				<div>
					<select name="sex" class="sex">
						<option value="">性别</option>
						<option value="男">男</option>
						<option value="女">女</option>
					</select>
				</div>
				<div>
					<select name="babyBirthday" class="bir">
						<option value="">生日</option>
						<option value="2018/12/31">2018/12/31</option>
						<option value="2019/1/1">2019/1/1</option>
						<option value="2019/1/2">2019/1/2</option>
					</select>
				</div>
				<router-link class="region" to='Area' tag='div'>地区<em>&gt;</em></router-link>
			</article>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Info',
		methods:{
			goback(){
				history.go(-1)
			}
		}
	}
	
</script>

<style scoped>
	#info{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	section{flex: 1;overflow: auto;}
	.glyphicon{
		font-size: 24px;
		color: #C5C5C5 ;
		position: absolute;
		left: 16px;
		top: 14px;
	}
	aside ul {
		width: 85vw;
		height: 110px;
		background: #eee;
		margin-left: 30px;
		padding-left: 15px;
		margin-top: 15px;
	}
	aside ul li{
		width: 85vw;
		height: 55px;
		background: #eee;
		color: #AAAAAA;
		line-height: 55px;
		text-align: left;
		position: relative;
	}
	aside ul li span{
		display: block;
		width: 55px;
		height: 55px;
		background: #C5C5C5;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
		text-align: center;
		line-height: 55px;
	}
	aside ul li b{
		font-size: 24px;
		font-weight: bolder;
		width: 24px;
		height: 24px;
		position: absolute;
		right: 0;
		top: 0;
	}
	article .sex{
		width: 88vw;
		height: 55px;
		background: #eee;
		margin-left: 30px;
		padding-left: 15px;
		margin-top: 15px;
		border: none;
		outline: none;
		color: #aaa;
	}
	article .sex option{
		width: 55px;
		background: #eee;
		color: #aaa;
	}
	article .bir{
		width: 88vw;
		height: 55px;
		background: #eee;
		border: none;
		outline: none;
		color: #aaa;
		margin-left: 30px;
		padding-left: 15px;
		margin-top: 1px;
	}
	article .region{
		width: 88vw;
		height: 55px;
		background: #eee;
		color: #AAAAAA;
		line-height: 55px;
		text-align: left;
		position: relative;
		margin-left: 30px;
		margin-top: 1px;
		padding-left:15px ;
	}
	article em{
		position: absolute;
		right: 0;
		top: 0;
		font-size: 24px;
		font-weight: bolder;
		width: 24px;
		height: 24px;
	}
</style>