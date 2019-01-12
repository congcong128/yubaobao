<template>
<div>
    <div class="ke">
    <header class="ketop">
        <span class="iconfont icon-fanhui" @click="tap2()"></span>
        <img src="../assets/logo.png" />
    </header>
   <section>
    <div class="biao">
        <div class="b1"><b>早教启蒙</b><p><span>1</span>主讲</p></div>
        <div class="b2"><p><span>50</span>人已买</p><p>咨询服务</p></div>
    </div>
    <div class="jie">介绍</div>
    <div class="shi">
            <div>
                <img src=""/>
            </div>
            <p>11111111111111111111111111111111111111111111111111111</p>
    </div>
    </section>
    <footer>
        <router-link to="/zixun" tag="span">咨询</router-link>
        <router-link to="/shikan_list" tag="span">试看 </router-link>
        <router-link to="/gou" tag="div"><p>立刻购买</p><p>99</p><p>元</p></router-link>

    </footer> 
    </div>
</div>

</template>
<script>
export default{
    name:"ke",
    data(){
        return{
            data:{}
        }
    },
    methods:{
        tap2(){
            this.$router.go(-1)
        }
    },
    mouted(){
        var _this=this;
        var num = this.$route.params.leid
        axios({
            mothed:"get",
            url:'http://47.107.246.156:8080/baby/lessons/detail.do',
             params:{leid:_this.num}
        }).then(function(data){
            console.log(data)
        })
    }
}
</script>
<style scoped="">
.ke{height:100vh;display:flex;flex-direction:column}

.ketop{height:200px;position:relative}

.ketop img{height:100%;width:100%}
.ketop span{position:absolute;top:10px;left:10px;width:30px;height:30px;text-align:center;line-height:30px}

footer{height:50px;width:100%;background:deepskyblue;position:absolute;bottom:0;left:0}


footer span{float:left;width:25%;height:50px;text-align:center;line-height:50px}
footer div{width:40%;float:left;height:50px;text-align:center;line-height:50px;padding: 0 5%}
footer div p{float:left}
section{flex-shrink: 1;overflow:auto}

.biao{height:100px;display:flex;flex-direction: column;padding:0 10px}
.biao .b1{height:50px;display:flex;align-items:center;font-size:16px;justify-content:space-between}

.biao .b2{height:50px;display:flex;align-items:center;justify-content:space-between}
.jie{height:50px;background:#ccc;text-align:center;line-height:50px;}

.shi{min-height:300px;background:#f0f;padding-top:40px}
.shi >div{width:300px;height:150px;background:#ff0;margin:0 auto}

.shi img{width:300px;hei3ght:150px;background:#ff0;margin:0 auto}
.shi p{text-indent:2em;width:60%;height:100px;border:1px solid #000;margin:30px auto;min-height:20px;word-break:break-all}
</style>