<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	import Mock from 'mockjs';
	Mock.mock('http://www.baidu.com/shequ.list',{
		'list|8-12':[
				{
					"userid|+1":0,
					"touxiang":"@image('40x40', '@color()')",
					"username":"@cname",
					"sj":"@date(yyyy.MM.dd)",
					"txt":"@cparagraph(1,3)",
					"imgs|1-9":[{"img":"@image('100x80', '@color()')"}]	
				}
			]
	})
export default {
  name: 'App'
}
</script>

<style>
*{margin: 0;padding: 0;}
a{text-decoration: none;}
img{display: block;}
li{list-style: none;}
header{width: 100%;height: 45px;color: rgba(16, 16, 16, 1);font-size: 18px;text-align: center;font-family: Microsoft Yahei;background: #E5E5E5 100%;line-height: 45px;position: relative;}
header i{position: absolute;left: 20px;font-weight: 900;}
footer{width: 100vw;
		height: 40px;
		text-align: center;
		line-height: 40px;
		display:flex;
		justify-content: space-around;
		align-items:center;
		color:#fff;
		overflow: hidden;
		border-top: 1px solid #E6DFDF;
	}
	footer span{
		width: 50px;
		height: 30px;
		background: #ccc;
		line-height: 30px;
		text-align: center;
		border-radius: 5px;
	}
h2{font-size: 16px;color: #101010;}
.router-link-active{background-color: skyblue;}
</style>
