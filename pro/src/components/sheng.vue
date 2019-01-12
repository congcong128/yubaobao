<template>
<div class="sheng">
      <header class="kshtop2">
            <i class="iconfont icon-fanhui" @click="f4"></i>
            <b>{{title}}</b>
            <i>{{tit}}</i>
        </header>
<section>
   <div class="tu"><img src="../assets/logo.png"/></div>
    <div class="shi">
        <router-link to="/sheng_neng" tag="div"><img src="../assets/logo.png"><span>能不能吃</span></router-link>
        <router-link to="/shipu_fen" tag="div"><img src="../assets/logo.png"><span>食谱</span></router-link>     
        <router-link to="/ting_xiao" tag="div"><img src="../assets/logo.png"><span>听听</span></router-link>
    </div>
    <div class="p"></div>
    <div class="shipu">
        <h1>每日食谱</h1>
        <div >
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>            
        </div>     
    </div>
    <div class="p"></div>
     <div class="shipu">
        <h1>能不能吃</h1>
        <div >
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>            
        </div>     
    </div>
    <div class="p"></div>
     <div class="shipu">
        <h1>听听</h1>
        <div >
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>            
        </div>     
    </div>
    
        
</section> 

</div>
</template>
<script>
import { Header } from 'mint-ui';
export default{
    name:'sheng',
    data(){
        return{
            title:"生活",
            tit:' '

        }
    },
   methods:{
        f4(){
            history.go(-1)
        }
    }
}
</script>
<style scoped="">
.router-link-active{
		color: #fff;
	}
	.sheng{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
   
.kshtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}

section{
		flex: 1;overflow:auto
	}	
.tu{height:150px;background:firebrick}
.tu img{height:150px}
.shi{height:100px;background:#0f0;display:flex;justify-content: space-around;align-items:center}
.shi  img{width:50px;height:50px;border-radius:50%}
.p{height:10px;background:#ccc}
.shipu{height:140px;background:#0f0}
.shipu h1{height:30px;background:#f00;font-size:18px;line-height:30px}
.shipu >div{height:110px;display:flex;justify-content: space-around;align-items:center}
.shipu  img{width:50px;height:50px}

</style>