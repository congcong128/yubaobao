<template>
    <div class="diyi">
        <header class="bdhtop2">
            <i class="iconfont icon-fanhui" @click="f1"></i>
            <b>{{title}}</b>
            <i></i>
        </header>
        <router-view @toparent="getdata"></router-view>
    </div>
</template>
<script>

    export default{
        name:'bdy',

        data(){
            return{
                title:'第一次 ',
                htr:''
            }
        },
        methods:{
            f1(){
               history.go(-1)
            },
            getdata(msg){
                this.title=msg;
                
            }
        },
       
    }
</script>
<style scoped="">
.diyi{display:flex;flex-direction:column;height:100vh}
.bdhtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}

</style>