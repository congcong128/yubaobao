<template>
    <div>
        <ul>
            <li><img src="../assets/logo.png"/></li>
            <li><img src="../assets/logo.png"/></li>
            <li><img src="../assets/logo.png"/></li>
            <li><img src="../assets/logo.png"/></li>
            <li><img src="../assets/logo.png"/></li>
            <li><img src="../assets/logo.png"/></li>
        
        </ul>
        <div class="wei">
            <p></p>
            <span>没有更多了</span>
            <P></P>
        </div>
    </div>
</template>
<script>
    export default{
        name:'bxcz',
    }
</script>
<style>
ul{display:flex;justify-content: space-around;flex-wrap: wrap}
li{width:100px;height:100px;background:#ccc;margin:10px 0;border-radius:10px}
li img{width:100px;height:100px;}
.wei {height:50px;display:flex;justify-content: space-around;align-items: center}
.wei p{width:30%;background:#ccc;height:3px;}
</style>