<template>
<div>
    <div class="yao">
        <img src="../assets/logo.png"/>
      <div>邀请码</div>
        <p>ADSWER</p>
    </div>
    <p>对方下载“育宝宝”输入邀请码即可进入亲友团，一起观看宝宝的成长记录。</p>
    
    <router-link to="" class='wei' tag="div">微信邀请</router-link>
    <router-link to="" class='wei' tag="div">QQ邀请</router-link>

</div>

</template>
<script>
export default{
    name:'b_q_y_y',
    data(){
        return{
            a:"亲友团",
            b:'返回',
            c:""
        }
    },
    mounted(){
        this.$emit('toparent',{ title:"亲友团",
            tit:'返回',
            tit1:""})
    }
}
</script>
<style scoped="">
.yao{height:150px;width:300px;background:#ccc;margin:30px auto;position:relative;}
.yao img{height:150px;width:300px;}
.yao div{position:absolute;top:10px;left:50%;margin-left:-50px;width:100px;height:40px;border:1px solid #000;color:#000;text-align:center;line-height:40px;background:#fff}
.yao p{position:absolute;top:60px;text-align:center;font-size:30px;width:100%}
p{width:80%;line-height:20px;margin:50px auto;font-size:14px}
.wei{width:50%;height:50px;margin:30px auto;text-align:center;line-height:50px;border:1px solid #000;border-radius:10px}
</style>                                
