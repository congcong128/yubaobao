<template>
<div class="footer">
    <section>
        
          <router-view ></router-view>
        
        
        
      
    </section>
    <footer>
        <router-link to="/" tag="span">图片</router-link>
        <router-link to="/" tag="span">图片</router-link>
       
        <router-link to="/" tag="span">图片</router-link>
    </footer>
</div>
</template>
<script>
export default{
    name:'b_q_y_x_f'
}
</script>
<style scoped>
.footer{height:100vh;display:flex;flex-direction:column;}
section{flex:1;overflow:auto;}
footer{flex:0;background:deepskyblue;padding:0 24%}
footer span{display:block;width:50px;height:40px;float:left;text-align:center;background:#f00;line-height:40px;}
</style>
