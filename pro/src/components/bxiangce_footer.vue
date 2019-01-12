<template>
    <div class="xiang_footer">
       <section>
           <router-view></router-view>
       </section>
       <footer>
           <router-link to="" tag="span">相册</router-link>
           <router-link to="" tag="span">照片</router-link>
           <router-link to="" tag="span">视频</router-link>  
       </footer>
    </div>
</template>
<script>


    export default{
        name:'b_xiangce_footer'
    }
</script>
<style>
.xiang_footer{height:85vh;display:flex;flex-direction:column;}
section{flex:1;overflow:auto}
footer{flex:0;background:deepskyblue;display:flex;height:40px;width:100%;justify-content: space-around}
footer span{display:block;height:40px;width:20%;background:deepskyblue;text-align:center;line-height:40px}
</style>
