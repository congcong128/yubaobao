<template>
  <div class="hello">
  	<button class="btn btn-danger" @click="sheetVisible=!sheetVisible">点击弹出上拉</button>
  	<button class="btn btn-success" @click="tishi">点击提示</button>
  	<input accept="image/*" type="file">
  	<!--<video controls class="aaa">
  		<source src="../../static/video.mp4" type="video/mp4">
  	</video>-->
    <mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible">
		</mt-actionsheet>
		<span class="glyphicon glyphicon-search"></span>
  </div>
</template>

<script>
	import { Toast } from 'mint-ui';//要用Toast就得先引入此模块
export default {
  name: 'HelloWorld',
  data () {
    return {
      actions:[
      	{name:"收藏",method:this.shoucang},
      	{name:"取消关注",method:this.quxiaoguanzhu},
      	{name:"举报",method:this.jubao}
      ],
      sheetVisible:false,
      abc:'color: red'
    }
  },
  methods:{
  	shoucang(){
  		console.log("收藏")
  	},
  	quxiaoguanzhu(){
  		console.log("取消关注")
  	},
  	jubao(){
  		console.log("举报")
  	},
  	tishi(){
  		Toast({
			  message: '提示',
			  className:'abc',
			  duration: 10000
			});
  	}
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.router-link-active{color: #fff;}
	.hello{height: 100vh;display: flex;flex-direction: column;}
	footer{height: 50px;background: orange;text-align: center;line-height: 50px;}
	section{flex: 1;margin-top: 40px;}
	footer{overflow: hidden;}
	footer span{float: left;width: 33%;}
	.aaa{width: 100vw;height: 100vh;}
</style>
