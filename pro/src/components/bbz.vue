<template>
<div class="bao1">
     
   <header class="bbzhtop2">
            <i class="iconfont icon-fanhui" @click="fbz"></i>
            <b>{{title}}</b>
            <b>{{tit}}</b>
    </header>
  
        <section>
            <div class="bao">
           
            <router-link to="/bao_baobei" tag="span">点击更换</router-link>
            
            <div class='d1'>
               <div class="d11">
                   <p>92cm</p>
                   <p>身高</p>
               </div>
               <div class="d11 d12"><img src="../assets/logo.png"/></div>
               <div class="d11">
                   <p>20kg</p>
                   <p>体重</p>
               </div>
            </div>  
            <div class="d2">             
                   <p>小宝宝</p>
                   <p>1岁</p>           
            </div>
          </div>

          <ul>
              <li @click="chu()"><span>头像</span>   
              
<router-link to=""><img src="../assets/logo.png"/></router-link></li>
              <li><span>小名</span><input type="text" placeholder="请输入宝宝小名"></li>
              <li><span>生日</span>
                    <select>
                        <option>2018年11月1日</option>
                        <option>2019年10月11日</option>
                        <option>2018年11月1日</option>
                        <option>2018年11月1日</option>                  
                    </select>
              </li>
              <li><span>性别</span>
                    <select >
                        <option>男</option>
                        <option>女</option>

                  </select></li>
              <li><span>关系</span> 
                <select>
                        <option>妈妈</option>
                        <option>爸爸</option>
                  </select>
            </li>
          </ul>
          <div class="xiao">
<div class="tanchu">
   <router-link to="" tag="span">拍照</router-link>

   <router-link to="" tag="span">宝宝相册</router-link>
   
   <router-link to="" tag="span">用户相册</router-link>
     <div @click="xiao">取消</div>
</div>
</div>
        </section>

</div>
</template>
<script>

export default{
    name:'bbz',
    data(){
        return{
            title:'宝宝',
            tit:'确定'
        }
    },
    methods:{
          fbz(){
               history.go(-1)
            },
        chu(){
         $(".xiao").stop().fadeIn('slow')
        },
        xiao(){
         $(".xiao").stop().fadeOut('slow')
        },
    }
}
</script>
<style scoped="">
.bao1{height:100vh;display:flex;flex-direction: column;}
.bbzhtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}
section {flex:1;overflow:auto}
.bao {height:180px;position:relative;padding-top:20px;background:#ccc}
.bao span{display:block;width:50px;height:30px;position:absolute;right:20px;bottom:20px;text-align:center;line-height:30px}
.bao .d1{height:100px;display:flex;justify-content:space-around;align-items: center}
.bao .d11{width:30%;height:100%;display:flex;flex-direction:column;align-items: center;justify-content: center}
.bao  .d12{border-radius:50%}
.bao  .d12 img{width:100px;height:100px;border-radius:50%}
.bao .d2 {margin-top:10px;height:30px}
.bao .d2 p{ text-align:center;height:15px}
ul{margin-top:20px;}
li{background:#ccc;height:60px;display:flex;justify-content:space-between;align-items: center;padding:0 10px;border-bottom:1px solid #000}
input{height:100%;width:40%;border:none;background:#ccc}
select{height:100%;width:40%;background:#ccc;border:none;}
li img{width:40px;height:40px;border-radius:50%;background:#fff}
option{background:#ccc}
.xiao{display:none}
.tanchu{width:100%;display:flex;flex-direction:column;position:absolute;bottom:0;}
.tanchu span{display:block;height:40px;background:#f00;text-align:center;width:100%; line-height:40px;border-bottom:1px solid #000}
.tanchu div{margin-top:10px;background:#ccc;text-align:center;width:100%; line-height:40px;}
</style>
