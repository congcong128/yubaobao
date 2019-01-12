<template>
    <div class="xiaobaobei">
     <header class="bbhtop2">
            <i class="iconfont icon-fanhui" @click="f5"></i>
            <b>{{title}}</b>
            <i @click="ti">{{htr}}</i>
        </header>
    

    <section>
        <div @click="bbz" class="header">
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
    </div>
    </section>
    </div>
</template>

<script>
import axios from 'axios';
    export default{
        name:'bao_baobei',
        data(){
            return{
                title:'小宝贝',
                htr:'确定',
                list:[]
            }
        },
        methods:{
            f5(){
                history.go(-1)
            },
            bbz(){
                this.$router.push('/bbz')
            },
            ti(){
                var _this=this;
                _this.$router.push('/bao_baobei')
                axios({
                    method:'post',
                    url:'http://10.8.155.17:8081/baby/baby/add.do',
                      params:{tel:"110",password:"110"} 
                }).then(function(data){
console.log(data)
                })


            }
        },
        mounted(){
            var _this=this;
            console.log("232")
                 axios({
                   mothed:"post",
                   url:"http://10.8.155.17:8081/baby/findbyuid.do",
                   params:{babyUId:"110"} 
                }).then(function(data){
                    console.log(data)
                    _this.list=data.data
                })
           
        }
    }
</script>
<style scoped="">
.xiaobaobei {display:flex;flex-direction:column;height:100vh}
section{flex:1;overflow:auto;}
.bbhtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}
.header{background:#ccc;}
.d1{height:100px;display:flex;justify-content:space-around;align-items: center}
 .d11{width:30%;height:100%;display:flex;flex-direction:column;align-items: center;justify-content: center}
  .d12{border-radius:50%}
  .d12 img{width:100px;height:100px;border-radius:50%}
 .d2 {margin-top:10px}
.d2 p{ text-align:center}
</style>