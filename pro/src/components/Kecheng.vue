<template>
  <div class="ke">
<header>
  <b></b>
  <span>课程</span>
  <b @click="tiao">搜索</b>
</header>

    <section>
      <!-- 轮播 -->
      <mt-swipe :auto="4000" style="height:200px;">
        <mt-swipe-item>
          <router-link to="/ke" class="s">
            <img src="../assets/images/2.png">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/ke" class="s">
            <img src="../assets/images/3.jpg">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/ke" class="s">
            <img src="../assets/images/4.png">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/ke" class="s">
            <img src="../assets/images/5.png">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
      <!-- 导航 -->
      <div class="xin">        
        <router-link to="/zao/1" tag="div">
          <img src="../assets/images/2.png">
          <span class="s2">早教启蒙</span>
        </router-link>
        <router-link to="/zao/2" tag="div">
          <img src="../assets/images/2.png">
          <span class="s2">家庭教育</span>
        </router-link>
        <router-link to="/zao/3" tag="div">
          <img src="../assets/images/2.png">
          <span class="s2">宝宝健康</span>
        </router-link>
    
           <router-link to="/sheng" tag="div">
          <img src="../assets/images/2.png"/>
          <span class="s2">生活知识</span>
        </router-link>
      </div>
<!-- 早期启蒙 -->
      <div class="mian">
        
        <router-link class="dd" to="/ke/1" tag="div">
          <div class="d1"><img src="../assets/images/2.png" alt=""></div>
          <div class="d2">
            <p>1</p>
            <div class="d21">
              <div class="d221">
                <b>2讲师</b>
                <b>2</b>
              </div>
              <span>免费试听</span>
            </div>
          </div>
        </router-link>
        
         <router-link class="dd" to="/ke/2" tag="div">
          <div class="d1"><img src="../assets/images/2.png" alt=""></div>
          <div class="d2">
            <p>1</p>
            <div class="d21">
              <div class="d221">
                <b>2讲师</b>
                <b>2</b>
              </div>
              <span>免费试听</span>
            </div>
          </div>
        </router-link>

        <router-link to="/zao/1" class="zaoqi" tag="div">早期启蒙</router-link>
        
      </div>
<!-- 家庭教育 -->
      <div class="mian">
       

        <router-link class="dd" to="/ke/3" tag="div">
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

        <router-link class="dd" to="/ke/4" tag="div">
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


        <router-link to="/zao/2" class="zaoqi" tag="div">家庭教育</router-link>
      </div>
<!-- 宝贝健康 -->
      <div class="mian">
        

        <router-link class="dd" to="/ke/5" tag="div">
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

        <router-link to="/zao/3" class="zaoqi" tag="div">宝贝健康</router-link>
      </div>
<!-- 生活知识 -->
      <div class="mian">
        <router-link class="dd" to="/ke/1" tag="div">
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

        <router-link to='/sheng' class="zaoqi" tag="div">生活知识</router-link>
      </div>
<!-- 食谱 -->
      <div class="shipu">
        <h1>食谱</h1>
        <router-link to tag="div">
          宝贝吃的好
          <span>去学习</span>
        </router-link>
      </div>
<!-- 听 -->
      <div class="shipu">
        <h1>听听</h1>
        <router-link to tag="div">
          儿童好听的音乐
          <span>去听听</span>
        </router-link>
      </div>
    </section>

    <footer>
			<router-link to='/home' tag='span'>首页</router-link>
			<router-link to='/kecheng' tag='span'>课程</router-link>
			<router-link to='/baobaoji' tag='span'>宝宝记</router-link>
			<router-link to='/care' tag='span'>社区</router-link>
			<router-link to='/my' tag='span'>我的</router-link>
		</footer>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  name: "Kecheng",
  data() {
    return {
      title: "课程",
      
    };
  },
  methods: {
    getdata(msg) {
      this.title = msg;
    },

    tiao(){
      this.$router.push("/Sou")
    }
   
  },
  mounted(){
    var _this=this;
    axios({
     url: "http://47.107.246.156:8080/baby/lessons/list.do",
     }).then(function(){
       console.log("2324")
     })
  }
};
</script>
<style scoped>
.ke {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

section {
  flex: 1;
  overflow: auto;
}
.s {
  width: 100%;
  height: 200px;
}
.xin {
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  
}
.xin div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.xin div img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.xin div .s2 {
  text-align: center;
  line-height: 40px;
}
.dd {
  width: 90%;
  height: 100px;
  border: 1px solid #f00;
  margin: 2% 5%;
}
.dd .d1 {
  float: left;
  width: 30%;
  height: 100px;
  background: #cefcef;
}
.d1 img{width:100px;height:100px;}
.dd .d2 {
  width: 70%;
  padding:4px;margin:5px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.dd .d2 p {
  width: 100%;
  height: 20px;
}
.dd .d2 .d21 {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
}
.dd .d2 .d221 {
  display: flex;
  flex-direction: column;
}
.dd .d2 .d221 b {
  display: block;
  border: 1px solid #000;
  
  margin: 5px;
}
.dd .d2 .d21 span {
  padding: 3px;
  display: block;
  border: 1px solid #000;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.zaoqi {
  width: 90%;
  height: 40px;
  margin: 5%;
  border: 1px solid #000;
  text-align: center;
  line-height: 40px;
  color: #000;
}
.shipu {
  width: 90%;
  margin: 2% 5%;
  display: flex;
  flex-direction: column;
  height: 80px;
}
.shipu h1 {
  height: 20px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
}
.shipu div {
  height: 50px;
  width: 100%;
  color: #000;
  border: 1px solid #000;
  text-align: center;
  line-height: 50px;
  margin-top: 9px;
}
.shipu div span {
  float: right;
  margin: 10px;
  width: 50px;
  height: 30px;
  line-height: 30px;
}
</style>