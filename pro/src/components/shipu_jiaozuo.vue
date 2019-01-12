<template>
    <div  class="zuofa">
        <section>
       
        <div class="t2"><img src="../assets/logo.png" ></div>
       

       
        <h1>娇子</h1>
        <p class="jie">饺子的制作原料营养素种类齐全，蒸煮法保证营养较流失，并且符合中国色香味饮食文化的内涵。
        </p>
        <div class="zhu">
            <h2>主料</h2>
          
            <div>
                <p>鸡脯肉750克，净冬笋100克，葱花50克，香油、姜末</p>
                <p>精盐、味精、高汤适量。</p>
            </div>
        </div>
        <div class="zuo">
             <h2>做法</h2>
             <div >
                 <p v-for="(item,i) in arr" >{{i+1}}{{item.nei}}</p>
             </div>
        </div>

         </section> 
<footer>
    <!-- <router-link @click="xian" to="" tag="span">转发</router-link>
     -->
     <span @click="xian">装法</span>
    <router-link to="/sheng_jiao_ping" tag="span">评论</router-link>
    <router-link to="" tag="span">收藏</router-link>
   

</footer>
         <ul class="zhuan">
             <li @click="xiao"><router-link to="" tag="span">转发朋友圈</router-link></li>
        <li @click="xiao">
        <router-link to="" tag="span">转发qq圈</router-link>

        </li>
        <li @click="xiao">
        <router-link to="" tag="span">转发社区</router-link>

        </li>

    </ul>
    </div>
</template>

<script>
export default{
    name:'shipu_jiaozuo',
    data(){
        return{
            title:'饺子做法',
            arr:[
                {nei:'将饺子皮摊平，放入馅料'},
                {nei:'将饺子皮摊平，放入馅料'},
                {nei:'将饺子皮摊平，放入馅料'},

            ]
        }
    },
    methods:{
        xian(){
            console.log("sadas")
            $(".zhuan").fadeIn("slow")
            
        },
        xiao(){
            $(".zhuan").fadeOut("slow")
        }
        
    },
    mounted(){
        this.$emit("toparent",this.title)
    }
}
</script>
<style>
.zuofa{height:91vh;display:flex;flex-direction: column}
section{flex:1;overflow:auto}
footer{flex:0;height:40px;background:deepskyblue;
        }
footer span{display:block;height:40px;float:left;width:33%;text-align:center;line-height:40px}
.t2{height:200px;background:#fcc;width:100%}
.t2 img{height:200px;width:100%}
h1{height:40px;line-height:40px;text-align:center;background:#ecc}
.jie{width:90%;height:30px;font-size:12px;margin:0 auto;line-height:18px;}
.zhu{height:150px;background:#bcc;margin-top:10px}
.zhu h2{height:40px;line-height:40px;padding-left:40px}
.zhu div{padding-left:100px}
.zhu div p{margin:10px;font-size:14px;}
.zuo h2{height:40px;line-height:40px;padding-left:40px}
.zuo div{padding-left:100px}
.zuo div p{margin:3px;font-size:14px;}
.zhuan{display:none;position:absolute;bottom:0;width:100%;background:#f0f0f0}

.zhuan li{height:40px;width:100%;text-align:center;line-height:40px;}
.zhuan li:hover{border-top:1px solid #000;border-bottom:1px solid #000;;color:#f00}
</style>