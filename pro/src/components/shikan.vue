<template>
<div class="shikan">
    <header>
        <i class="iconfont icon-fanhui" @click="tap1()"></i>
        <router-link to="" class="d1" tag="div"><img src="../assets/images/4.png"/></router-link>       
             <p >共{{str}}集</p>
        <p class="p2">{{str1}}</p>
     
    </header>

      <router-view ></router-view>

 
</div>
</template>
<script>
import axios from 'axios'

export default{
    name:'shikan',
    data(){
        return{
            str:10,
            str1:'试看',
            arr:[]
        }
    },
    methods:{
        tap1(){
            this.$router.go(-1)
        }
    },

         mounted (){
        var _this=this;
        axios({
            method:'get',
            url:''
        }).then(function(data){
            console.log(data.data)
            _this.arr=data.data.use
        })

    }
}

</script>
<style>
.shikan{height:100vh;display:flex;flex-direction:column}

header{height:240px;position:relative;}
header i{position:absolute;top:10px;left:10px;width:20px;height:20px;display:block;background:#ff0;}
header div{height:200px;width:100%}
header img{height:200px;width:100%}
header > p{height:20px;width:100%;text-align:center;line-height:20px;font-size:14px}
  .p2{background:#cecece}


</style>