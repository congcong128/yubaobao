<template>
    <div class="xiang">
        <section>
            <img src="../assets/images/3.jpg"/>
        </section>
        <footer>
           
            <router-link to="" tag="span">重选</router-link>
            <router-link to="" tag="span">使用照片</router-link>
        </footer>
    </div>
</template>
<script>
    export default{
        name:'bbzx'
    }
</script>
<style>
.xiang{display:flex;flex-direction:column;height:90vh;}
section img{width:80%;height:300px;margin:100px auto}
footer{height:40px;background:deepskyblue;display:flex;justify-content: space-around;align-items:center}
</style>