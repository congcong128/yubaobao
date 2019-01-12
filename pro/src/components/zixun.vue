<template>
<div>
 <div class="zixun">
    <mt-header @click="tap()" title="在线咨询">
    <router-link to="/kecheng" slot="left">
    <mt-button icon="back"></mt-button>
    </router-link>
  
</mt-header>
<section>
<h1><img src="../assets/images/4.png"/></h1>
<div class="liao">
			<ul id="ul">
				<li class="left">hello</li>
				<li class="right"></li>				
				<li class="right">
					hellhellhellhellhellhellhellhellhellhellhellhellhellhellhellhellhellhellhell</li>
			</ul>						
        </div>
</section>

<footer>
    <input style="width:70%;height:39px;" type="text" placeholder="请输入">
    <input style="width:30%;height:39px;color:#000" type="button" vule="发送">
</footer>
</div>
</div>
</template>
<script>
import { Header } from 'mint-ui';
export default{
    name:'zixun',
    methods:{
        tap(){
            this.$router.go(-1)
        }
    }
}

</script>
<style>
.zixun{
    height:100vh;display:flex;flex-direction:column;
}
section{flex:1;overflow:auto;}
section h1{height:100px;background:#f0f;display:flex;justify-content: center;}
section h1 img{width:100px;height:100px;border-radius:50%;}


.left{float:left}
.right{float:right}
 ul {margin:10px;
			
			
				overflow-y :auto
			}
			li{margin:5px 0;
			 max-width:250px;
			 width:auto;
			 border-radius:2px;
			 height:auto;
			 padding:3px 0;
			 clear:both;
			word-break:break-all;
			 }
			.left{float:left;background:#ccc;text-align:left }
			.right{float:right;background:#0f0;text-align:left}



footer{
    height:40px;border-top:1px solid #000}
footer input{float:left;border:none;}
.shu{width:70%;height:39px;}
.ti{width:20%;height:39px;text-align:center;line-height:39px}


</style>