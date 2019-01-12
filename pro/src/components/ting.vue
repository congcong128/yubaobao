<template>
<div>
   <header class="bzhtop2">
            <i class="iconfont icon-fanhui" @click="fz"></i>
            <b>{{title}}</b>
            <i></i>
    </header>
<section>

    <router-view @toparent="getdata"></router-view>
</section>
</div>
</template>
<script>


export default{
    name:'ting',
    data(){
        return{
            title:'听听'
        }
    },
    methods:{
        fz(){
            this.$router.go(-1)
        },
        getdata(msg){
            this.title=msg;
        }
    }
}
</script>
<style scoped="">

.ting{display:flex;height:100vh;flex-direction:column}
.bzhtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}

section{flex:1;overflow:auto}
</style>
