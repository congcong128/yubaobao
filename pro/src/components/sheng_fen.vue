<template>
<div class="fen">

  <div class="fenlei" v-for="item in arr"><router-link to="/sheng_zhu">{{item}}</router-link></div> 

</div>
</template>
<script>
import axios from 'axios';

export default{
    name:'sheng_fen',
    data(){
        return{
            arr:["主食","主食","主食","主食","主食","主食","主食","主食","主食",]
        }
    },
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
.fen{display:flex;flex-wrap:wrap;justify-content: flex-start}
.fenlei{width:80px;height:80px;border-radius:10px;background:#f00;text-align:center;line-height:80px;float:left;margin:6%}

</style>