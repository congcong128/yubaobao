<template>
<div class="jiao">

     <header class="ksjhtop2">
            <i class="iconfont icon-fanhui" @click="f42"></i>
            <b>{{title}}</b>
            <i></i>
</header>


    <router-view  @toparent="getdata" ></router-view>



</div>
</template>
<script>
export default{
    name:'sheng_jiao',
    data(){
        return{
            title:"饺子",
            arr:[
                {biao:"孕妇能吃",nei:'饺子的制作原料营养素种类齐全，蒸煮法保证营养较少流失，并且符合中国色香味饮食文化的内涵。饺子是一种历史悠久的民间吃食，深受老百姓的欢迎，民间有"好吃不过饺子"的俗语。每逢新春佳节，饺子更成为一种应时不可缺少的佳肴'}
                ,
                {biao:"孕妇能吃",nei:'饺子的制作原料营养素种类齐全，蒸煮法保证营养较少流失，并且符合中国色香味饮食文化的内涵。饺子是一种历史悠久的民间吃食，深受老百姓的欢迎，民间有"好吃不过饺子"的俗语。每逢新春佳节，饺子更成为一种应时不可缺少的佳肴'}
                ]
        }
    },
    methods:{
        f42(){
          history.go(-1)
        },
        getdata(msg){
            this.title=msg
        },
        
    }
}
</script>
<style scoped="">
.jiao{display:flex;flex-direction:column;height:100vh}
.ksjhtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}

header{flex:0;position:absolute;top:0;left:0;width:100%;}
footer{flex:0;height:40px;width:100%;background:deepskyblue;}
footer span{width:33%;height:100%;float:left;}
</style>