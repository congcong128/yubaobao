<template>
<div class="p1">
    <section>
    <div class="hu" v-for="item in arr">
       
        <div class="ming">
            <div class="d1"><img src="../assets/logo.png"></div>
            
            <div class="d2">
                <p><span>{{item.yname}}</span><span><i class="iconfont icon-xin"></i><b>{{item.zan}}</b></span></p>
                <p>{{item.ft}}</p>
            </div>
        </div>
        <div class="ping">
           <p>{{item.jian}}</p>
            <div class="t1"><span>{{item.tname}}</span><span>{{item.tn}}</span></div>
        </div>
    </div>
    </section>
    <footer>
     <div class="sou">
        
        <input type="text" placeholder="评论"/>
        <input type="button" value='提交'/>
        
    </div>
    </footer>
</div>
</template>

<script>

export default{
    name:'sheng_jiao_ping',
    data(){
        return{title:'评价',
            arr:[
                {yname:"123",
                zan:'12',
                ft:"发表于宝贝5周岁",
                jian:'饺子多以冷水和面粉为剂，将面和水和在一起，揉成大的粗面团，盖上拯干的湿纱布或毛巾，放置(饧)一小时左右，刀切或手摘成若干个小面团，先后揉搓成直径约3公分左右的圆长条，刀切或手摘成一个个小面剂子，将这些小面剂子用小擀面杖擀成中间略厚周边较薄的饺子皮',
                tname:'23',
                tn:"sqfdsvsd"},
                 {yname:"123",
                zan:'12',
                ft:"发表于宝贝5周岁",
                jian:'饺子多以冷水和面粉为剂，将面和水和在一起，揉成大的粗面团，盖上拯干的湿纱布或毛巾，放置(饧)一小时左右，刀切或手摘成若干个小面团，先后揉搓成直径约3公分左右的圆长条，刀切或手摘成一个个小面剂子，将这些小面剂子用小擀面杖擀成中间略厚周边较薄的饺子皮',
                tname:'23',
                tn:"sqfdsvsd"},
                 {yname:"123",
                zan:'12',
                ft:"发表于宝贝5周岁",
                jian:'饺子多以冷水和面粉为剂，将面和水和在一起，揉成大的粗面团，盖上拯干的湿纱布或毛巾，放置(饧)一小时左右，刀切或手摘成若干个小面团，先后揉搓成直径约3公分左右的圆长条，刀切或手摘成一个个小面剂子，将这些小面剂子用小擀面杖擀成中间略厚周边较薄的饺子皮',
                tname:'23',
                tn:"sqfdsvsd"},
                 {yname:"123",
                zan:'12',
                ft:"发表于宝贝5周岁",
                jian:'饺子多以冷水和面粉为剂，将面和水和在一起，揉成大的粗面团，盖上拯干的湿纱布或毛巾，放置(饧)一小时左右，刀切或手摘成若干个小面团，先后揉搓成直径约3公分左右的圆长条，刀切或手摘成一个个小面剂子，将这些小面剂子用小擀面杖擀成中间略厚周边较薄的饺子皮',
                tname:'23',
                tn:"sqfdsvsd"}
            ]
        }
    },
     methods:{
        getdata(msg){
            this.title=msg
        },
 
    },
    mounted(){
        this.$emit('toparent' ,this.title)
    }
}
</script>
<style scoped="">
.p1{height:95vh;display:flex;flex-direction:column}
section{flex:1;overflow:auto;}
footer{display:flex;justify-content: center;align-items: center;height:40px;}
img{height:50px;width:50px;;border-radius:50%}
.ming{
    height:50px;display:flex;justify-content: space-between;align-items: center;padding:10px;
}
.hu{height:200px;display:flex;flex-direction:column;justify-content: flex-start;}
.ming .d1{width:20%;height:100%}
.ming .d2{width:80%;display:flex;flex-direction: column;justify-content: space-between;}
.ming .d2 p{display:flex;justify-content: space-between}
.ping>p{width:80%;height:100px;overflow-y: auto;float:right}
.hu .t1{height:30px;width:80%;float:right;}
.hu .t1 span{float:left;margin-left:10px}


.sou{height:30px;width:100%;background:#f00;padding:5px;botder-top:1px solid #000}
 
input{float:left;border:none;height:100%}

.sou input:first-child{width:80%;border-top-left-radius:5px;border-bottom-left-radius:5px;padding-left:4px}
.sou  input:last-child{width:18%;border-top-right-radius:5px;border-bottom-right-radius:5px;}


</style>