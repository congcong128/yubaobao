<template>
  <div class="zao">
    <!-- 早期启蒙 -->
     <header class="bzhtop2">
            <i class="iconfont icon-fanhui" @click="fz"></i>
            <b>{{title}}</b>
            <i></i>
        </header>
    
    <section>
      <div class="mian" v-for="(item,i) in use">
        <router-link class="dd" :to="'/ke/'+item.leid" tag="div">
       
          <div class="d1">
            <!-- <img :src="item.img"> -->
          </div>
          <div class="d2">
            <p>1111111</p>
            <div class="d21">
              <div class="d221">
                <b>{{name}}讲师</b>
                <b>2</b>
              </div>
              <span>免费试听</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "zao",
  data() {
    return {
      title:"早期启蒙",
      use: [],
      name:"111"
    };
  },
  methods: {
    fz(){
      this.$router.go(-1);
    }
  },
  mounted() {
    var _this = this;
    var num=this.$route.params.ltid
  //  console.log(num)
    axios({
      method: "GET",
      url: "http://47.107.246.156:8080/baby/lessons/list.do",
      params:{ltid:_this.num}
      
    }).then(function(data) {
      // console.log(_this.num)
      console.log(data.data);
      _this.title="早期启蒙"
      _this.use = data.data;
      
    });
    this.$emit("toparent", this.title);
     
  }
};
</script>
<style scoped="">
.zao{height:100vh;display:flex;flex-direction:column;}
.bzhtop2{height:40px;background:deepskyblue;display:flex;justify-content: space-between;align-items:center;}


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
.dd .d1 img {
  width: 90px;
  height: 100px;
}

.dd .d2 {
  width: 70%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.dd .d2 p {
  width: 100%;
  height: 20px;
  background: #888;
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

section {
  flex: 1;
  overflow: auto;
}
</style>