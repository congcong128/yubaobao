<template>
<div>
    <mt-header title="购买">
        <router-link to=""  slot="left">
            <mt-button @click="tap1()" icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="jia">
         <span>需支付</span>
         <h2>{{str}}</h2>
    </div>
    <p></p>
    <div class="dan">
        <mt-radio
       :options="['微信', '支付宝']">
        </mt-radio>
    </div>
    <div class="ti" @click="tap()">
        <span>支付成功</span>
     确认支付
    </div>
</div>
</template>
<script>
import { Header } from 'mint-ui';
import { Radio } from 'mint-ui';
import { Toast } from 'mint-ui';
export default{
    name:'gou',
    data(){
        return{
            str:"99.90"
        }
    },
    methods:{
        tap1(){
            this.$router.go(-1)
        },
        tap(){
           Toast({
  message: '支付成功',

  duration: 2000
});
        }
    }
}

</script>
<style>
.jia{
    height:100px;padding-top:30px;display:flex;flex-direction:column;justify-content: center;align-items:center
}
h2{margin-top:10px}
p{height:15px;background:#cecece}
.ti{height:40px;margin-top:100px;background:#ccc;text-align:center;line-height:40px;}
.ti span{display:none;width:200px;height:40px;background:#cecece;position:fixed;top:50%;left:50%;margin:-20px 0 0 -100px}

</style>