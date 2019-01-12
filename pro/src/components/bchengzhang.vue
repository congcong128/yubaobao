<template>
    <div class="chzh">
       <header class="bchtop2">
            <b class="iconfont icon-fanhui" @click="f2"></b>
            <b>{{title}}</b>
            <b @click="tiao">{{tit}}</b>
        </header>
   

<router-view @toparent="getdata"></router-view>
    </div>
</template>
<script>


    export default{
        name:'bchengzhang',
        data(){
            return{
                title:'成长记录',
                tit:"添加"
            }
        },
        methods:{
            f2(){
                history.go(-1)
            },
            tiao(){
                this.$router.push("/bchengzhang_tianjia")
                
            },
            getdata(msg){
                this.title=msg.title,
                this.tit=msg.tit   

            }

        },
        mounted(){
            
        }

    }
</script>
<style  scoped="">
.chzh{height:100vh;display:flex;flex-direction:column}
.bchtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}
b{}
</style>