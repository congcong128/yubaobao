<template>
<div>
    
    <div class="lei_ming">
        <router-link to="/shipu_jiaozuo">
        <div class="tu"><img src="../assets/logo.png"/></div>
        <div class="xiang">
            <p>饺子</p>
            <div>
                <span>哺乳不能吃</span>
                <span>孕妇可吃</span>
                <span>宝宝10月可吃</span>

            </div>
        </div>
        </router-link>
    </div>


    <div class="lei_ming">
        <router-link to="/shipu_jiaozizuo">
        <div class="tu"><img src="../assets/logo.png"/></div>
        <div class="xiang">
            <p>饺子</p>
            <div>
                <span>哺乳不能吃</span>
                <span>孕妇可吃</span>
                <span>宝宝10月可吃</span>

            </div>
        </div>
        </router-link>
    </div>
    <div class="lei_ming">
        <div class="tu"><img src="../assets/logo.png"/></div>
        <div class="xiang">
            <p>饺子</p>
            <div>
                <span>哺乳不能吃</span>
                <span>孕妇可吃</span>
                <span>宝宝10月可吃</span>

            </div>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name:'sheng_zhu',
    data(){
        return{
            title:"主食"
        }
    },
    mounted(){
        this.$emit('toparent',this.title)
    }

}
</script>
<style scoped="">
img{width:100px;height:100px;}

.lei_ming{width:90%;height:100px;border:1px solid #000;margin:20px auto;}
.tu{float:left;width:35%}
 .xiang{width:64%;height:100%;display:flex;float:left;justify-content:space-between;align-items: center }
.xiang p{width:40%;height:80%;;padding-top:5%;font-size:20px}
.xiang div{width:50%;height:80%;font-size:16px;padding-top:7%}
</style>
