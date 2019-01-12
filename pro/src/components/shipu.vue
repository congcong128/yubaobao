<template>
<div class="shipu">

 <header class="ksphtop2">
            <i class="iconfont icon-fanhui" @click="f42"></i>
            <b>{{title}}</b>
            <i></i>
        </header>



    <router-view @toparent="getdata"></router-view>


</div>
</template>
<script>
import { Header } from 'mint-ui'
export default{
    name:'shipu',
    data(){
        return{
        title:'食谱',
        }
    },
    methods:{
        getdata(msg){
            this.title=msg
        },
        f42(){
            this.$router.go(-1)
        }
    },
    mounted(){
      
    }

}
</script>
<style scoped="">

.shipu{display:flex;flex-direction:column;height:100vh}
.ksphtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}
</style>