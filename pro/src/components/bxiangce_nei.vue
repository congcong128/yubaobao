<template>
    <div class="xiang">
        <section>
        
        <dl @click="jia">
            <dt>
                <router-link to="/bxiangce_xinjian">
                 添加相册
                </router-link>
            </dt>
            <dd>
            
            </dd>
        </dl>

       
        <dl>
            <dt>
                <router-link to="'/bzhaopian_shangchuan/'+item.uid">
                 <img src="../assets/images/5.png"/>
                </router-link>
            </dt>
            <dd>
                <p>我们在一起</p>
                <p>30<b>张</b></p>
            </dd>
        </dl>
         <dl v-for="item in arrx">
            <dt>
                <router-link to="/bzhaopian_shangchuan">
                 <img src=""/>
                </router-link>
            </dt>
            <dd>
                <p>{{item}}</p>
                <p>{{item}}<b>张</b></p>
            </dd>
        </dl>
      
       
</section>
 <footer>
   <router-link to="/bxiangce_nei" tag="span">相册</router-link>
     <router-link to="/bzhaopian_shangchuan" tag="span">照片</router-link>
     <router-link to="" tag="span">视频</router-link>

</footer>     
       
      

    </div>
</template>
<script>
import axios from 'axios'

    export default{
        name:"bxiangce_nei",
        data(){
            return{
                arrx:[]
            }
        },
        methods:{
            jia(){
                
            }
        },
         mounted(){
            var _this=this;
             axios({
                   mothed:"get",
                   url:"http://10.8.155.17:8081/baby/user/album.do",
                   params:{tel:"110",password:"110"} 
                }).then(function(data){
                    console.log(data.data)
                    _this.arrx=data.data
                })
        }
    }
</script>
<style  scoped="">
.xiang{height:94vh;display:flex;flex-direction:column}

section{flex:1;overflow:auto;display:flex;flex-wrap:wrap;align-content: flex-start}
footer {height:40px;background:dodgerblue;display:flex;justify-content: space-around;}
footer span{display:block;width:20%;height:40px;background:dodgerblue;text-align:center;line-height:40px}
section div{width:110px;height:110px;background:#ccc;text-align:center;line-height:100px;border-radius:10px;margin:10%}



dl{height:140px;width:110px;margin:10%}
dt{width:110px;height:110px;border-radius:10px;background:#ccc;text-align:center;line-height:110px}

dt img{width:110px;height:110px;border-radius:10px;background:#ccc}

dd{height:40px;}
dd p{height:20px;text-align:right;line-height:20px}
</style>
