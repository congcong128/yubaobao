<template>
<div>
   <div class="lei_ming" v-for='item in arr'>
       <router-link to="/shipu_jiaozuo">
        <div class="tu"><img src="../assets/logo.png"/></div>
        <div class="xiang">        
                <h2>{{item.qname}}</h2>
                <p>{{item.jie}}</p>
                <p>{{item.j1}}</p>          
        </div>
        </router-link>
    </div>
</div>
</template>
<script>
export default{
    name:'shipu_yunqi',
    data(){
        return{
            title:"孕期",
            arr:[
                {img:'../assets/logo.png',
                qname:'饺子',
                jie:'孕妇可吃',
                j1:'营养好吃'},
                {img:'../assets/logo.png',
                qname:'米饭',
                jie:'孕妇不可吃',
                j1:'营养差'},
            {img:'../assets/logo.png',
                qname:'饺子',
                jie:'孕妇可吃',
                j1:'营养好吃'},
            ]
            
        }

    },
    mounted(){
        this.$emit('toparent',this.title)
    }
}
</script>
<style>
img{width:100px;height:100px;}

.lei_ming{width:90%;height:100px;border:1px solid #000;margin:20px auto;
        
}
.tu{width:30%;height:100%;float:left}
.tu img{width:100%;height:100%;}
.xiang{width:65%;height:100%;background:#f0f;padding-left:5%;float:right;
        display:flex;flex-direction: column;justify-content: center;}
.xiang h2{font-size:18px;}
</style>