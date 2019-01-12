<template>
   <div class="sou">
       <div class="biao">
           <img src=""/>
           <h2>所有照片</h2>
           <span><b>50</b><b>张</b></span>
       </div>
       <div class="shi">
            <h2></h2>
          <div class="lun">
           <ul>
              
                <!--<li><router-link to=""><img src="../assets/images/2.png"/></router-link></li>-->
               <!--<li><router-link to=""><img src="../assets/images/2.png"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/2.png"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/2.png"/></router-link></li>
               <li><router-link to=""><img src="../assets/images/2.png"/></router-link></li> -->
            </ul>
           </div>
       </div>
       <div class="wei">
           <p></p>
           <span>没有了</span>
           <p></p>

       </div>
   </div>

</template>
<script>
 
    export default{
        name:"bxczq",
        data(){
            return{
              
            }
        }
    }
</script>
<style>
.sou{display:flex;flex-direction:column}
.biao{height:150px;background:#ccc;position:relative;}
.biao img{height:150px;width:100%}
.biao h2{position:absolute;bottom:30px;left:30px;}
.biao span{display:block;position:absolute;bottom:10px;left:30px}
.shi{height:150px;background:#ccc;margin:10px 0}
.shi h2{height:40px;line-height:40px;padding-left:30px;font-size:16px;}
.lun{height:110px;width:100%;overflow:hidden;background:#f00}
.shi ul{height:110px;overflow:auto;display:flex;justify-content: flex-start;align-items: center}

.shi ul li{width:100px;height:100px;border-radius:10px;margin-right:10px}
.shi ul li img{width:100px;height:100px;border-radius:10px}
.wei {display:flex;justify-content:center;align-items: center}
.wei p{width:30%;height:2px;background:#ccc}

</style>