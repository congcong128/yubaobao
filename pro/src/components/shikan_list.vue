<template>
  <div class="shikan_list">
  
        <div class="li">
            <router-link to="/shikan_detail">
                <span class="s1"><p class="iconfont icon-shipin ">1</p><p>试看课</p><p>宝贝计划</p></span>
                <span class="s2">111</span>
            </router-link>
        </div>
         <div class="li">
            <router-link to="/shikan_detail">
                <span class="s1"><p class="iconfont icon-shipin ">1</p><p>试看课</p><p>宝贝计划</p></span>
                <span class="s2">111</span>
            </router-link>
        </div>
         <div class="li">
            <router-link to="/shikan_detail">
                <span class="s1"><p class="iconfont icon-shipin ">1</p><p>试看课</p><p>宝贝计划</p></span>
                <span class="s2">111</span>
            </router-link>
        </div>
         <div class="li">
            <router-link to="/shikan_detail">
                <span class="s1"><p class="iconfont icon-shipin ">1</p><p>试看课</p><p>宝贝计划</p></span>
                <span class="s2">111</span>
            </router-link>
        </div>
         <div class="li">
            <router-link to="/shikan_detail">
                <span class="s1"><p class="iconfont icon-shipin ">1</p><p>试看课</p><p>宝贝计划</p></span>
                <span class="s2">111</span>
            </router-link>
        </div>
        
         
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "shikan_list",
  data(){
      return{arr:[]}
  },
  mounted() {
    var _this = this;
    axios({
      method: "get",
      url: ""
    }).then(function(data) {
      console.log(data.data);
      // _this.arr = data.data.use;
    });
  }
};
</script>
<style scoped="">
.shikan_list {
  height: 70vh;
  display: flex;
  flex-direction: column;
 
 
}
.li {
  height:100px;
  width:100%;
  font-size: 12px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
 
 

  }
span{display:block;height:15px;width:100%;}
span p{float:left;}
.s2{text-align:right}
</style>