<template>
    <div class="bxc">      
       <header class="bxhtop2">
            <i class="iconfont icon-fanhui" @click="f3"></i>
            <b>{{title}}</b>
            <i>{{tit}}</i>
        </header>
        <router-view  @toparent="getdata"> </router-view>
  
    
</div>
 
</template>
<script>


    export default{
        name:'bxiangce',
        data(){
            return{
                title:'相册',
                tit:''
            }
        },
        methods:{
            f3(){
                 history.go(-1)
            },
            getdata(msg){
                this.title=msg.title
                this.tit=msg.tit
            }
        }
    }
</script>
<style>

.bxc{height:100vh;display:flex;flex-direction:column}
.bxhtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}

</style>