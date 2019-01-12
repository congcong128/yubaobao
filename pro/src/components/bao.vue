<template>
    <div class="bao">
        <header class="htop1">
            
            <!--  -->
            <router-link to="/bao_baobei" tag="span">切换</router-link>
         <router-link to="/bbz">   
          <div class='d1'>

               <div class="d11">
                   <p>92cm</p>
                   <p>身高</p>
               </div>
               <div class="d11 d12"><img src="../assets/logo.png"/></div>
               <div class="d11">
                   <p>20kg</p>
                   <p>体重</p>
               </div>
        </div>  
          <div class="d2">            
                   <p>小宝宝</p>
                   <p>1岁</p>            
          </div>
          </router-link>
        </header>
        <!-- ---------------------------------------------------- -->
        <section>
            <div class="biao">
                <router-link to="/bdy1" tag="span">第一次</router-link>
                <router-link to="/bchengzhang_jilu" tag="span">成长记录</router-link>
                <router-link to="'/bxiangce_nei/'+" tag="span">相册</router-link>
                <router-link to="/b_q_y" tag="span">亲友团</router-link>
            </div>
            <div class="shi">
                <div class="liao">
                    <h2><b>今天</b><span>第一天</span></h2>
                    <div class="nei">
                        <p>今天宝宝出生了，长得很漂亮，虽然没有睁眼，</p>
                        <p>今天宝宝出生了，长得很漂亮，虽然没有睁眼，</p>
                        <p>今天宝宝出生了，长得很漂亮，虽然没有睁眼，</p>
                        <p>今天宝宝出生了，长得很漂亮，虽然没有睁眼，</p>
                        <p>今天宝宝出生了，长得很漂亮，虽然没有睁眼，</p>
                        <p>今天宝宝出生了，长得很漂亮，虽然没有睁眼，</p>                      
                    </div>                            
                </div>
            </div>
        </section>


        <!-- ----------------------------- -->
  <footer>
      <router-link to="/shouye" tag="span">首页</router-link>
      <router-link to="/kecheng" tag="span" >课程</router-link>
      <router-link to="/bao" tag="span">宝宝</router-link>
      <router-link to="/she" tag="span">社区</router-link>
      <router-link to="/wo" tag="span">我的</router-link>   
    </footer>
  
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name:'Baobaoji',
        data(){
            return{
                arr:[]
            }
        },

        methods:{
            di(){
                router.push("/bdy1")
            }
        },
        mounted(){
            var _this=this;
           

        }
    }
</script>
<style scoped>
.bao{height:100vh;display:flex;flex-direction:column}
header{height: 37px;}
section{flex:1;overflow:auto;}
.htop1{height:200px;position:relative;padding-top:50px}
.htop1 span{display:block;width:50px;height:30px;position:absolute;right:20px;top:20px;text-align:center;line-height:30px}
.htop1 .d1{height:100px;display:flex;justify-content:space-around;align-items: center}
.htop1 .d11{width:30%;height:100%;background:#fff;display:flex;flex-direction:column;align-items: center;justify-content: center}
.htop1  .d12{border-radius:50%}
.htop1  .d12 img{width:100px;height:100px;border-radius:50%}
.htop1.d2 {margin-top:10px;height:30px}
.htop1 .d2 p{ text-align:center;height:15px}
section .biao{height:30px;background:deepskyblue;margin:5px 0}
section .biao span{float:left;width:25%;height:100%;text-align:center;line-height:30px;background:#cecece}
section .liao h2{padding-left:20px;height:30px;background: #af2;line-height:30px}
section .liao h2 span{font-size:14px}
section .liao .nei p{width:80%;margin:20px auto;line-height:20px;background:#cecece}



footer{
		height: 40px;
		background:deepskyblue;
		text-align: center;
		line-height: 40px;
	}
footer span{
		float: left;
		width: 20%;
	}
</style>