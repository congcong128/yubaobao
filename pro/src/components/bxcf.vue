<template>
    <div class="bxcf">
       <section>
           <router-view></router-view>
       </section>
       <footer>
           <div class="sou">
               <input type="text" placeholder="阅览">
           <button>确定</button>
           </div>
           
       </footer>
    </div>
</template>
<script>
 import { Header } from 'mint-ui';
    export default{
        name:'bxcf'
    }
</script>
<style>
.bxcf{height:94vh;display:flex;flex-direction:column;}
section{flex:1;overflow:auto}
footer{flex:0;height:40px;background:deepskyblue;}
footer .sou{width:90%;height:38px;border:1px solid #000;margin:0 auto}
footer .sou input{float:left;border:none;height:100%;}
footer .sou input:first-child{width:80%;}
footer .sou button{width:20%;background:#fff;height:100%;border:none}
</style>