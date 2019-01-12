<template>
  <div id="my">
  	<header>我的</header>
    <section>
    	<div class="my-t">
    		<router-link to='/Info' tag='span'>头像</router-link>
    		<em>小宝妈妈</em>
    	</div>
    	
    		<ul class="tab-lists">
    			<li><span class="glyphicon glyphicon-plus"></span><router-link to='/Baby' tag='a'><b>添加宝宝</b><em>&gt;</em></router-link></li>
    			<li><span class="glyphicon glyphicon-user"></span><router-link to='/Member' tag='a'><b>会员中心</b><em>&gt;</em></router-link></li>
    			<li><span class="glyphicon glyphicon-ok-circle"></span><router-link to='/Mysign' tag='a'><b>我的签到</b><em>&gt;</em></router-link></li>
    			<li><span class="glyphicon glyphicon-calendar"></span><router-link to='/Course' tag='a'><b>我的课程</b><em>&gt;</em></router-link></li>
    			<li><span class="glyphicon glyphicon-star-empty"></span><router-link to='/Collect' tag='a'><b>我的收藏</b><em>&gt;</em></router-link></li>
    			<li><span class="glyphicon glyphicon-picture"></span><router-link to='/makepic' tag='a'><b>相册定制</b><em>&gt;</em></router-link></li>
    			<li><span class="glyphicon glyphicon-question-sign"></span><router-link to='/Yijian' tag='a'><b>意见反馈</b><em>&gt;</em></router-link></li>
    			<li><span class="glyphicon glyphicon-cog"></span><router-link to='/Login' tag='a'><b>通用设置</b><em>&gt;</em></router-link></li>
    			<li><span class="glyphicon glyphicon-list-alt"></span><router-link to='/Order' tag='a'><b>我的订单</b><em>&gt;</em></router-link></li>
    		</ul>
    	
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
export default {
  name: 'My'
  
}
</script>


<style scoped>
	#my{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	section{
		flex: 1;overflow: auto;
	}
	.my-t{width: 100vw;height: 40vw;position: relative;}
	.my-t span{
		position: absolute;
		left: 50%;
		top: 30px;
		width: 56px;
		height: 56px;
		line-height: 56px;
		background-color: rgba(230, 223, 223, 1);
		color: rgba(104, 105, 106, 1);
		font-size: 14px;
		text-align: center;
		font-family: Arial;
		border: 1px solid rgba(255, 255, 255, 0);
		display: block;
		border-radius: 50%;
		margin-left: -28px;
	}
	.my-t em{
		font-style: normal;
		position: absolute;
		left: 50%;
		top: 100px;
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
		margin-left: -28px;
	}
	.tab-lists{
		
		width: 95vw;
	}
	.tab-lists span{
		font-size: 24px;
		color: rgba(197,197,197,1);
	}
	.tab-lists li{
		border-bottom:1px solid #999 ;
		margin: 15px 0;
		
	}
	.tab-lists li a b{
		color: rgba(136, 136, 136, 1);
		font-size: 14px;
		text-align: left;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(255, 255, 255, 0);
		padding-left: 10px;
		font-weight: normal;
	}
	.tab-lists li a em{
		font-size: 26px;
		color: #D2E0E6;
		font-weight: bolder;
		float: right;
		line-height: 30px;
	}

</style>
