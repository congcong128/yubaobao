<template>
    <div>
        <div class='xin'>
            <textarea class="shu" placeholder="请输入相册名"></textarea>
            <span @click="tian" class="ti">完成</span>
        </div>
       
    </div>
</template>
<script>
import axios from 'axios'

    export default{
        name:'bxiangce_xinjian',
        methods:{
            tian(){
               var _this=this;
             axios({
                   mothed:"get",
                   url:"http://10.8.155.17:8081/baby/user/buyalbum.do",
                  query:{tel:"110",password:"110",} 
                }).then(function(data){
                    if(data==1){
                    alert('添加成功')
                _this.$router.push('/bxiangce_nei')
                    
                    }
                })
            }
        }
    }
</script>
<style scoped="">
.xin{display:flex;flex-direction:column;padding-top:20px}
.shu{height:150px;padding-left:10px;background:#cecece}
.ti{width:60%;height:40px;margin:30px auto;background:#ccc;border-radius:10px;text-align:center;line-height:40px;}

</style>