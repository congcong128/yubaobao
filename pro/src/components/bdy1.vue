<template>
    <div class="list1">
        <div class="list">
            <div class="list2">
            <router-link to="/bdyzd" tag="div">自定义</router-link>
            <div v-for="ite in arrd"><router-link to="/bdynn" tag="span">{{1}}</router-link></div>
          
       </div>
        <div class="wei">
            <p></p>
            <span>没有更多了</span>
            <p></p>
        </div>
        </div>
        
    </div>
</template>
<script scoped="">
import axios from 'axios'

    export default{
        name:'bdy1',
          data(){
            return{
                title:'自定义第一次',
                arrd:[]
            }
        },
        methods:{
             
        },
        mounted(){
        this.$emit("toparent",this.title)
        var _this=this
      axios({
                   mothed:"get",
                   url:"http://10.8.155.17:8081/baby/user/album.do",
                   params:{tel:"110",password:"110"} 
                }).then(function(data){
                    console.log(data.data)
                    _this.arrd=data
                })
        }
    }
</script>
<style scoped="">
.list1{height:90vh;display:flex;flex-direction:column}
.list{flex:1;overflow:auto;}
.list2{display:flex;flex-wrap:wrap;align-content:flex-start;}
.list2 >div{width:80px;height:80px;background:#ccc;border-radius:10px;display:flex;justify-content: center;align-items:center;margin:5%}
/* .list2 span{width:80px;height:80px;background:#ccc;border-radius:10px;display:flex;justify-content: center;align-items:center;margin:} */
.wei{display:flex;justify-content:space-around;align-items: center}
.wei p{width:35%;height:3px;background:#ccc}
</style>