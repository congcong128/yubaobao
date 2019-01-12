<template>
<div>
    
    <div class="tu">
        <div class="t1"><img src="../assets/logo.png"/></div>
    </div>
    <div class="shou" >
        <p class='p1' @click="t1()"><i>1</i><span class="cang1">已收藏</span><span class="cang2">收藏</span></p>
        <span class='p2'><b>共</b><b>5</b><b>首</b></span>
    </div>
    <ul >
       <li>
        <audio style="width:200px;height:30px" src="" controls="controls">你不支持</audio>   
           <span>小白兔</span>
        </li> 
        <li>           
           <audio style="width:200px;height:30px" class="yin" src="" controls="controls">你不支持</audio>            
            <span>小白兔</span>
         
        </li> 
        <li>
        <audio style="width:200px;height:30px" src="" controls="controls">你不支持</audio>   

            <span>小白兔</span>
        </li> 
    </ul>
</div>
</template>
<script>
export default{
    name:'ting_xiaobaitu',
    data(){
        return{
            title:"小白兔",
            arr:[]
        }
    },


    methods:{
        t1(){
            $(".cang2").stop().fadeOut(),
            $(".cang1").stop().fadeIn()
            
        },
        
      
    },
    mounted(){
        this.$emit('toparent',this.title)
    }

}
</script>
<style>
.tu{height:100px;background:red url(../assets/logo.png);background-size:cover;position:relative;}
.t1{width:60px;height:60px;position:absolute;top:60px;left:20px;}
.t1 img{width:60px;height:60px;}
.shou{height:50px;padding-top:20px;display:flex;flex-direction:column;}
.shou p{height:20px;text-align:center;}
.shou .p1 .cang1{display:none;}
.shou .p1 :hover .cang2{display:none}
.shou .p1 :hover .cang1{display:block}
.shou .p1 :hover i{color:#ff0}
.shou .p2{text-align:right;border-bottom:1px solid #000}
 
li {height:30px;width:80%;margin:40px auto;display:flex;justify-content: space-between;align-items:center}
li>div{width:100px;height:30px}
li .fin{width:100px;height:30px}

   

</style>