<template>
<div>

<mt-swipe :auto="4000" style="height:200px;background:#f0f">
  <mt-swipe-item ><router-link to="/zao" class="s" ><img src="../assets/images/2.png"/></router-link></mt-swipe-item>
 <mt-swipe-item><router-link to="/zao" class="s"><img src="../assets/images/3.jpg"/></router-link></mt-swipe-item>
  <mt-swipe-item><router-link to="/zao" class="s"><img src="../assets/images/4.png"/></router-link></mt-swipe-item>
  <mt-swipe-item><router-link to="/zao" class="s"><img src="../assets/images/5.png"/></router-link></mt-swipe-item> 

</mt-swipe>
<div class="xin">
    <router-link to="/zao" tag="div"><img src="" /><span class="s2">早教启蒙</span></router-link>
    <router-link to="/zao" tag="div"><img src="" /><span class="s2">家庭教育</span></router-link>
    <router-link to="/zao" tag="div"><img src="" /><span class="s2">宝宝健康</span></router-link>
    <router-link to="/ke" tag="div"><img src="" /><span class="s2">生活知识</span></router-link>
</div>

<div class="mian">
     <router-link class="dd" to="/zao" tag="div">
        <div class="d1">1</div>
        <div class="d2">
            <p>1111111</p>
            <div class="d21">
                <div class="d221">
                <b>1</b>
                <b>2</b>
                </div>
            <span>免费试听</span>

            </div>
        </div>
     </router-link>

 <router-link class="dd" to="/zao" tag="div">
        <div class="d1">1</div>
        <div class="d2">
            <p>1111111</p>
            <div class="d21">
                <div class="d221">
                <b>1</b>
                <b>2</b>
                </div>
            <span>免费试听</span>

            </div>
        </div>
     </router-link>

     <router-link to="" class="zaoqi" tag="div">早期启蒙</router-link>
</div>

  <div class="mian">
     <router-link class="dd" to="/zao" tag="div">
        <div class="d1">1</div>
        <div class="d2">
            <p>1111111</p>
            <div class="d21">
                <div class="d221">
                <b>1</b>
                <b>2</b>
                </div>
            <span>免费试听</span>

            </div>
        </div>
     </router-link>

 <router-link class="dd" to="/qimeng" tag="div">
        <div class="d1">1</div>
        <div class="d2">
            <p>1111111</p>
            <div class="d21">
                <div class="d221">
                <b>1</b>
                <b>2</b>
                </div>
            <span>免费试听</span>

            </div>
        </div>
     </router-link>

     <router-link to="" class="zaoqi" tag="div">家庭教育</router-link>
</div> 

<div class="mian">
     <router-link class="dd" to="/qimeng" tag="div">
        <div class="d1">1</div>
        <div class="d2">
            <p>1111111</p>
            <div class="d21">
                <div class="d221">
                <b>1</b>
                <b>2</b>
                </div>
            <span>免费试听</span>

            </div>
        </div>
     </router-link>

 <router-link class="dd" to="/qimeng" tag="div">
        <div class="d1">1</div>
        <div class="d2">
            <p>1111111</p>
            <div class="d21">
                <div class="d221">
                <b>1</b>
                <b>2</b>
                </div>
            <span>免费试听</span>

            </div>
        </div>
     </router-link>

     <router-link to="" class="zaoqi" tag="div">宝贝健康</router-link>
</div>

<div class="mian">
     <router-link class="dd" to="/qimeng" tag="div">
        <div class="d1">1</div>
        <div class="d2">
            <p>1111111</p>
            <div class="d21">
                <div class="d221">
                <b>1</b>
                <b>2</b>
                </div>
            <span>免费试听</span>

            </div>
        </div>
     </router-link>

 <router-link class="dd" to="/qimeng" tag="div">
        <div class="d1">1</div>
        <div class="d2">
            <p>1111111</p>
            <div class="d21">
                <div class="d221">
                <b>1</b>
                <b>2</b>
                </div>
            <span>免费试听</span>

            </div>
        </div>
     </router-link>

     <router-link to="" class="zaoqi" tag="div">生活知识</router-link>
</div> 

<div class="shipu">
    <h1>食谱</h1>
    <router-link to="" tag="div">宝贝吃的好 <span>去学习</span></router-link>
</div>
 
 <div class="shipu">
    <h1>听听</h1>
    <router-link to="" tag="div">儿童好听的音乐 <span>去听听</span></router-link>
</div>
</div>

</template>
<script>
import vue from 'vue'
import axios from 'axios'
import Mock from "mockjs"
Mock.mock('http://www.aa.com',{
  "user|4":[
    {'img':'@image(600*200)',
    }],
 
  
})
export default{
    name:'list',
    data(){
        return{
            arr:[],
      
        }
          

    },

    mounted(){
        var _this=this;
        axios({
            method:"get",
            url:'http://www.aa.com'
        }).then((data)=>{
            console.log(data.data.user)
            _this.arr=data.data.user
            
        })

    }
 }

</script>
<style>
.s{width:100%;height:200px}
.xin{height:120px;display:flex;justify-content:space-around;align-items: center;margin-top:20px;background:#f0f}
.xin div{display:flex;flex-direction: column;justify-content: center;align-items: center}
.xin div img{width:100%;height:60px;border-radius:50%;}
.xin div .s2{text-align:center;line-height:40px;}
.dd{width:90%;height:100px;border:1px solid #f00;margin:2% 5%}
.dd .d1{float:left;width:30%;height:100px;background:#cefcef;}
.dd .d2{width:70%;height:100px;display:flex;flex-direction: column;justify-content: flex-start;align-items: flex-start}
.dd .d2 p{width:100%;height:20px;}
.dd .d2 .d21{width:100%;height:80px;display:flex;justify-content: space-between;}
.dd .d2 .d221{display:flex;flex-direction:column}
.dd .d2 .d221 b{display:block;border:1px solid #000;padding:4px;margin:5px}
.dd .d2 .d21 span{padding:3px;display:block;border:1px solid #000;height:30px;text-align:center;line-height:30px}

.zaoqi{width:90%;height:40px;margin:5%;border:1px solid #000;text-align:center;line-height:40px;color:#000}
.shipu{width:90%;margin:2% 5%;display:flex;flex-direction:column;height:80px;}
.shipu h1{height:20px;width:100%;font-size:14px;line-height:20px}
.shipu div{height:50px;width:100%;color:#000;border: 1px solid #000;text-align:center;line-height:50px;margin-top:9px}
.shipu div span{float:right;margin:10px;width:50px;height:30px;background:#f0f;line-height:30px;}


</style>