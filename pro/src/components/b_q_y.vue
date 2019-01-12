<template>
    <div class='qinyou'>
       
         <header class="bqhtop2">
            <i class="iconfont icon-fanhui" @click="f4">{{tit}}</i>
            <b>{{title}}</b>
            <b @click="tiao">{{tit1}}</b>
        </header>
   
        <router-view @toparent="getdata"></router-view>
  
    </div>
</template>
<script>
import { Header } from 'mint-ui';

    export default{
        name:'b_q_y',
        data(){
            return{
                title:'亲友团',
                tit:"",
                tit1:'修改关系'

            }
        },
        methods:{
            f4(){
               history.go(-1)
            },
            tiao(){
                this.$router.push("/b_q_y_x")
            },
            getdata(mage){
                this.title=mage.title,
                this.tit=mage.tit,
                this.tit1=mage.tit1      

            }
        },

    }
</script>
<style scoped="">

.qinyou{display:flex;flex-direction:column;height:100vh}
.bqhtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}

</style>