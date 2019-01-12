<template>
<div>
    <div class="qin">
        <dl>
            <dt><img src="../assets/logo.png"/></dt>
            <dd>妈妈(我)</dd>
        </dl>
        <dl>
            <dt><img src="../assets/logo.png"/></dt>
            <dd>爸爸</dd>
        </dl>
    </div>
    <div class="yao">
        <h3>你还可邀请</h3>
        <ul>
            <li v-for="item in arr"><router-link to="/b_q_y_y" tag="span">{{item.name}}</router-link></li>
        </ul>
    </div>
</div>
</template>
<script>
    export default{
        name:'b_q_y_n',
        data(){
            return{
                arr:[{name:'奶奶'},{name:'奶奶'},{name:'奶奶'},{name:'奶奶'},{name:'奶奶'},{name:'奶奶'},{name:'奶奶'},{name:'奶奶'},]
            }
        }
    }
</script>
<style scoped="">
.qin{height:150px;display:flex;justify-content:space-around;align-items:center;background:#ccc ;margin:10px 0}
.qin dl{display:flex;flex-direction:column;justify-content: center;align-items: center;}
.qin dl dt{width:50px;height:50px;border-radius:50%;background:#fff}
.qin dl dt img{width:50px;height:50px;border-radius:50%;}
.yao {height:200px;background:#ccc;padding:10px}
.yao h3{height:20px;line-height:20px;font-size:14px;background:#ccceee}
.yao li{width:50px;height:50px;border-radius:50%;text-align:center;line-height:50px;background:#fff;float:left;margin:10px}
</style>