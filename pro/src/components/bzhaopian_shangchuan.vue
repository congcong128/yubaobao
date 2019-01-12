<template>
   <div class="zhaopian">
        <section>
       <div class="biao">
           <img src="../assets/images/2.png"/>
           <h2>所有照片</h2>
           <span>{{shu}}张</span>
       </div>
       <div class='shangchuan'>
           <router-link to="/bxcz" tag="div">上传照片</router-link>

       
       </div>
       <div class="shi">
            <h2>11111</h2>
          <div class="lun">
           <ul>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
            </ul>
           </div>
       </div>
     
       <div class="shi">
            <h2>11111</h2>
          <div class="lun">
           <ul>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
            </ul>
           </div>
       </div>
   
       <div class="shi">
            <h2>11111</h2>
          <div class="lun">
           <ul>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
            </ul>
           </div>
       </div>
      
       <div class="shi">
           
            <h2>11111</h2>
          <div class="lun">
           <ul>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/3.jpg"/></router-link></li>
            </ul>
           </div>
       </div>
      

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
        name:"bxczq",
        data(){
            return{
                title:'照片',
                shu:'50'
            }
        },
        mounted(){
            this.$emit('toparent',this.title)
            var _this=this
            axios({
                method:"",
                url:"http://10.8.155.17:8081/baby//user/albumstatus",
                params:{tel:"110" ,uid:_this.$route.params.uid}
            })
        }

    }
</script>
<style  scoped="">
.zhaopian{display:flex;flex-direction:column;height:87vh;}
section{display:flex;flex-direction:column;flex:1;overflow:auto}
footer {height:40px;background:dodgerblue;display:flex;justify-content: space-around;}
footer span{display:block;width:20%;height:40px;background:dodgerblue;text-align:center;line-height:40px}


.biao{height:150px;background:#ccc;position:relative;}
.biao img{height:150px;width:100%}
.biao h2{position:absolute;bottom:30px;left:30px;}
.biao span{position:absolute;bottom:10px;left:30px}
.shi{height:150px;background:#ccc;}
 p{height:5px;background:#ccc}
.shi h2{height:30px;font-size:16px;margin:0;padding:0;line-height:30px;}
/* .lun{height:110px;width:100%;overflow:hidden;background:#f00} */
.shi ul{height:110px;overflow:auto;display:flex;justify-content: flex-start;align-items: center}

.shi ul li{width:100px;height:100px;border-radius:10px;margin-right:10px}
.shi ul li img{width:100px;height:100px;border-radius:10px}

.shangchuan div{margin:40px auto;width:80%;height:50px;border:1px solid #000;text-align:center;line-height:50px;border-radius:10px}
</style>