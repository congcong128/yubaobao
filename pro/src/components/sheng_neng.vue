<template>
<div>
 <header class="ksnhtop2">
            <i class="iconfont icon-fanhui" @click="f41"></i>
            <b>{{title}}</b>
            <i></i>
</header>
  
<section>
    <div class="sou">
        <div>
        <input type="text" placeholder="搜索"/>
        <input @click="ti" type="button" value="按钮"/>
        </div>
    </div>
    
        <router-view class="rong" @toparent="getdata" ></router-view>
       
    
</section>
</div>
</template>
<script>
import axios from 'axios';

export default{
    nane:'sheng_neng',
    data(){
        return{
            title:"能不能吃"
        }
    },
    methods:{
        getdata(msg){
        this.title=msg
    },
   f41(){
       history.go(-1)
   },
   ti(){
        var _this=this;
    axios({
        method:'get',
        url:"http://47.107.246.156:8080/baby/food/foodSearch.do",
        params:{ parameters:"1"}
    }).then(function(data){
        console.log(datda)
    })
}
   }
,
mounted(){
    var _this=this;
    axios({
        method:'get',
        url:"http://47.107.246.156:8080/baby/food/foodSearchByType.do",
    }).then(function(data){
        console.log(datda)
    })
}
}
</script>
<style scoped="">
.sheng_neng{height:100vh;display:flex;flex-direction:column}
.ksnhtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}

.rong{flex:1;overflow:auto}
 .sou{height:50px;width:100%;background:#f00;display:flex;justify-content: center;align-items:center;}
 .sou >div{width:90%;height:30px;border:1px solid #000;margin:0 auto;border-radius:5px}
input{float:left;border:none;height:100%}
.sou div input:first-child{width:80%;border-top-left-radius:5px;border-bottom-left-radius:5px;padding-left:4px}
.sou div input:last-child{width:20%;border-top-right-radius:5px;border-bottom-right-radius:5px;}



</style>