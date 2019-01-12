<template>
    <div class="bao">
        <div class="htop1">
            
            <!--  -->
           <div @click="bb"> <router-link to="/bao_baobei" tag="span">切换</router-link></div>
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
        </div>
        <!-- ---------------------------------------------------- -->
        <section>
            <div class="biao">
               <span @click="diyi">第一次</span>
                <!-- <router-link to="/bchengzhang_jilu" tag="span">成长记录</router-link> -->
                
                <span @click="cheng">成长记录  </span>
                <span @click="xiang">相册</span>
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
			<router-link to='/home' tag='span'>首页</router-link>
			<router-link to='/kecheng' tag='span'>课程</router-link>
			<router-link to='/baobaoji' tag='span'>宝宝记</router-link>
			<router-link to='/care' tag='span'>社区</router-link>
			<router-link to='/my' tag='span'>我的</router-link>
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
            bb(){
                var _this=this
                 axios({
                   mothed:"get",
                   url:"http://10.8.155.17:8081/baby/findbyuid.do",
                   params:{"babyUId":_this.tle} 
                }).then(function(data){
                    console.log(data)
                })
            },

            di(){
                this.$router.push("/bdy1")
            },
            diyi(){
               this.$router.push('/bdy1');
                axios({
                   mothed:"get",
                   url:"http://10.8.155.17:8081/baby/user/album.do",
                   params:{tel:"110",password:"110"} 
                }).then(function(data){
                    // console.log(data)
                })
            },
            cheng(){
                this.$router.push('/bchengzhang_jilu');
                axios({
                   mothed:"get",
                   url:"http://10.8.155.17:8081/baby/user/album.do",
                   params:{tel:"110",password:"110"} 
                }).then(function(data){
                    // console.log(data)
                })
            },

            xiang(){
                /* this.$router.push('/bxiangce_nei');
                axios({
                   mothed:"get",
                   url:"http://10.8.155.17:8081/baby/user/album.do",
                   params:{tel:"110",password:"110"} 
                }).then(function(data){
                    // console.log(data)
                })*/
            }

        },
        mounted(){
            var _this=this;
           

        }
    } 
</script>
<style scoped="">
.bao{height:100vh;display:flex;flex-direction:column}
section{flex:1;overflow:auto;}
.htop1{height:200px;position:relative;padding-top:50px}
.htop1 span{display:block;width:50px;height:30px;position:absolute;right:20px;top:20px;text-align:center;line-height:30px}
.htop1 .d1{height:100px;display:flex;justify-content:space-around;align-items: center}
.htop1 .d11{width:30%;height:100%;background:#fff;display:flex;flex-direction:column;align-items: center;justify-content: center}
.htop1 .d12{border-radius:50%}
.htop1 .d12 img{width:100px;height:100px;border-radius:50%}
.htop1 .d2 {margin-top:10px;height:30px}
.htop1 .d2 p{ text-align:center;height:15px}
section .biao{height:30px;background:deepskyblue;margin:5px 0}
section .biao span{float:left;width:25%;height:100%;text-align:center;line-height:30px;background:#cecece}
section .liao h2{padding-left:20px;height:30px;background: #af2;line-height:30px}
section .liao h2 span{font-size:14px}
section .liao .nei p{width:80%;margin:20px auto;line-height:20px;background:#cecece}




</style>