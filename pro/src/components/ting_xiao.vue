<template>
<div>
    <div class="lei">
     <div class="sou">       
        <input type="text" placeholder="评论"/>
        <input type="button" value='搜索'/>      
    </div>
    <div  class="fen">
        <div @click="yin" class="color">歌曲</div>
        <div @click="gu">故事</div>
    </div>
    </div>
    <div class="list">
        <dl v-for="item in arry">
            <router-link to="'/ting_xiaobaitu/'+item.mdType">
            <dt><img src="../assets/logo.png"/></dt>
            <dd>213</dd>
            </router-link>
         </dl>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default{
    name:'ting_xiao',
    data(){
        return{
            arry:[]
        }
    },
    methods:{
        yin(){

             var _this=this;
        axios({
            method:'get',
            url:"http://47.107.246.156:8080/baby/mm/mmenuinfo.do",
            params:{mdMmId:'0'}
        }).then(function(data){
            console.log(data)
            _this.arry=data
        })


        },
        gu(){

             var _this=this;
        axios({
            method:'get',
            url:"http://47.107.246.156:8080/baby/mm/mmenuinfo.do",
            params:{mdMmId:'1'}
        }).then(function(data){
            console.log(data)
            _this.arry=data
        })
        }
    },
    mounted(){
        var _this=this;
        axios({
            method:'get',
            url:"http://47.107.246.156:8080/baby/mm/mmenuinfo.do",
            params:{mdMmId:'0'}
        }).then(function(data){
            console.log(data)
            _this.arry=data
        })
    }
}
</script>
<style scoped="">
.lei{border-bottom:1px solid #000;display:flex;flex-direction: column;justify-content: center;height:100px;background:#f00}
.fen{height:30px;display:flex;justify-content: space-around;align-items: center}
.fen >div{width:50px;height:30px;text-align:center;line-height:30px;background:#ff0}
.list{display:flex;flex-wrap:wrap;justify-content:flex-start;}
.list dl{width:50px;height:70px;background:#cecece;margin:5%}
.list dl dt{width:50px;height:50px;}
.list dl dt img{width:50px;height:50px;}
.list dd{height:30px;text-align:center;line-height:20px}

.sou{height:30px;width:90%;margin:10px auto;border:1px solid #000}
input{float:left;border:none;height:100%;background:#fff}

.sou input:first-child{width:80%;border-top-left-radius:5px;border-bottom-left-radius:5px;padding-left:4px}
.sou  input:last-child{width:18%;border-top-right-radius:5px;border-bottom-right-radius:5px;border:none}
.fen div:hover{background:#f00}
</style>