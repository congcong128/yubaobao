<template>
<div class="shipu_fen">
    <div class="sou">
        
        <input type="text" placeholder="评论"/>
        <input type="button" value='提交'/>
        
    </div>
  <div  v-for="item in arr">
    <div class="shilei">
        <p>{{item.aname}}</p>
        <p>{{item.shi}}</p>
        <div >
        <router-link to="/shipu_yunqi" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>
        <router-link to="" tag="div"><img src="../assets/logo.png"><span>zhuyi</span></router-link>            
        </div> 
        <div class="p" style="background:#ccc"></div>    
    </div> 
    </div>
</div>
</template>
<script>
export default{
    name:'shipu_fen',
    data(){
        return{
            arr:[
                {aname:'孕期',
                 shi:'每日食谱',
                  img:'../assets/logo.png',
                  cai:'虾米'},
                  {aname:'产后',
                 shi:'每日食谱',
                  img:'../assets/logo.png',
                  cai:'虾米'},
                  {aname:'婴儿',
                 shi:'每日食谱',
                  img:'../assets/logo.png',
                  cai:'虾米'}
            ]
        }
    }
}
</script>
<style scoped="">
.shipu_fen{height:90vh;overflow:auto;flex-direction:column}
.shilei{height:170px;margin-bottom:20px;display:flex;flex-direction:column;padding:0 20px }
.shilei h1{height:30px;font-size:18px;line-height:30px}
.shilei h2{height:20px;font-size:16px;line-height:20px}
.shilei .p{height:10px;}
.shilei >div{height:110px;display:flex;justify-content: space-around;align-items:center;color:#000}
.shilei  img{width:50px;height:50px}

.sou{height:30px;width:100%;margin:10px 0;border:1px solid #000}
 
input{float:left;border:none;height:100%}

.sou input:first-child{width:80%;border-top-left-radius:5px;border-bottom-left-radius:5px;padding-left:4px}
.sou  input:last-child{width:18%;border-top-right-radius:5px;border-bottom-right-radius:5px;} 
</style>