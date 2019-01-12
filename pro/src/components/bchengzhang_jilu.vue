<template>
    <div class="jilu">
        <div class="ju">
            <div>
                <h2>2018.10.112</h2>
                <div>
                
                    <span><b>身高</b><b>1</b><b>cm</b></span>
                    <span><b>体重</b><b>1</b><b>kg</b></span>
                    <p>宝宝身高体重在标准之内哦</p>
                </div>
            </div>
            <div>
                <h2>2018.10.112</h2>
                <div>
                
                    <span><b>身高</b><b>1</b><b>cm</b></span>
                    <span><b>体重</b><b>1</b><b>kg</b></span>
                    <p>宝宝身高体重在标准之内哦</p>
                </div>
            </div><div>
                <h2>2018.10.112</h2>
                <div>
                
                    <span><b>身高</b><b>1</b><b>cm</b></span>
                    <span><b>体重</b><b>1</b><b>kg</b></span>
                    <p>宝宝身高体重在标准之内哦</p>
                </div>
            </div><div>
                <h2>2018.10.112</h2>
                <div>
                
                    <span><b>身高</b><b>1</b><b>cm</b></span>
                    <span><b>体重</b><b>1</b><b>kg</b></span>
                    <p>宝宝身高体重在标准之内哦</p>
                </div>
            </div><div>
                <h2>2018.10.112</h2>
                <div>
                
                    <span><b>身高</b><b>1</b><b>cm</b></span>
                    <span><b>体重</b><b>1</b><b>kg</b></span>
                    <p>宝宝身高体重在标准之内哦</p>
                </div>
            </div><div>
                <h2>2018.10.112</h2>
                <div>
                
                    <span><b>身高</b><b>1</b><b>cm</b></span>
                    <span><b>体重</b><b>1</b><b>kg</b></span>
                    <p>宝宝身高体重在标准之内哦</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

    export default{
        name:'bchengzhang_jilu',
        data(){
            return{
                
                arrcheng:[]
            }
        },
        mounted(){
       
        var _this=this
      axios({
                   mothed:"get",
                   url:"http://10.8.155.17:8081/baby/user/album.do",
                   params:{tel:"110",password:"110"} 
                }).then(function(data){
                    console.log(data.data)
                    _this.arrcheng=data
                })
        }
    }
</script>
<style scoped="">
.jilu{height:90vh;display:flex;flex-direction:column}
.ju{flex:1;overflow:auto;padding:0 5%}
.ju h2{height:30px;line-height:30px;font-size:18px;font-weight:100;background:#f99}
.ju>div {overflow:auto}
.ju>div div{min-height:100px;display:flex;flex-direction:column;background:#ccc;border-radius:5px;}
.ju>div div span{display:block;height:30px;line-height:30px}
</style>