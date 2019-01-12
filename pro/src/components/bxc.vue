<template>
    <div class="bxc">
        <header class="bxhtop2">
            <i class="iconfont icon-fanhui" @click="f3"></i>
            <b>相册</b>
            <i>{{htr}}</i>
        </header>
        <router-view @toparent="getdata"></router-view>
    </div>
</template>
<script>
import axios from 'axios';
    export default{
        name:'bxc',

        data(){
            return{
                title:'相册 ',
                htr:'',
            }
        },
        methods:{
            f3(){
               history.go(-1)
            },
            getdata(msg){
                this.title=msg.title;
                this.htr=msg.tit;

                
            }
        },
      
       
    }
</script>
<style scoped="">
.bxc{display:flex;flex-direction: column;height:100vh}
.bxhtop2{height:40px;background:dodgerblue;display: flex;justify-content: space-between;align-items: center;}
</style>