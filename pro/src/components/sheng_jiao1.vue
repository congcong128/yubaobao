<template>
<div>

<div>
    <div class="tu"><img src="../assets/logo.png"/></div>
    <div class="jie">
        <div v-for="(item,i) in arr">
            <h2>{{item.biao}}</h2>
            <p>{{item.nei}}</p>
        </div>
    </div>
 </div>  
  
      

</div>

</template>
<script>
import { Actionsheet } from 'mint-ui';
export default{
    name:"sheng_jiao1",
     data(){
        return{      
            arr:[
                {biao:"孕妇能吃",nei:'饺子的制作原料营养素种类齐全，蒸煮法保证营养较少流失，并且符合中国色香味饮食文化的内涵。饺子是一种历史悠久的民间吃食，深受老百姓的欢迎，民间有"好吃不过饺子"的俗语。每逢新春佳节，饺子更成为一种应时不可缺少的佳肴'}
                ,
                {biao:"孕妇能吃",nei:'饺子的制作原料营养素种类齐全，蒸煮法保证营养较少流失，并且符合中国色香味饮食文化的内涵。饺子是一种历史悠久的民间吃食，深受老百姓的欢迎，民间有"好吃不过饺子"的俗语。每逢新春佳节，饺子更成为一种应时不可缺少的佳肴'}]
        }
    },
    methods:{
        zhu(){
            
        }
    },
    mounted(){
        this.$emit('toparent',this.title)
    }
}
</script>
<style >
.tu{height:200px;background:#f00}
.tu img{height:150px;}
.jie{padding: 0 20px;margin:10px 0}
.jie h2{height:30px;line-height:30px;font-size:16px}
.ping{height:40px;width:100%;background:dodgerblue}
.ping span{display:block;float:left;width:33%;height:100%}
</style>