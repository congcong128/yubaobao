
<template>
<div class="xiu">
    <section>
    <router-link to="" class='guan' tag="div">
        
        <div>
            关系
     </div>
        <select>
            <option>姑姑</option>
            <option>姑父</option>
            <option>姑姑</option>
            <option>姑姑</option>
        </select>
    

</router-link>


<dl>
            <dt>
                <router-link to="">
                 <img src="../../static/img/chengzhang.jpg"/>
                </router-link>
            </dt>
            <dd>
                <p>50张</p>
                <p>30<b>张</b></p>
            </dd>
        </dl>

<dl>
            <dt>
                <router-link to="">
                 <img src="../../static/img/chengzhang.jpg"/>
                </router-link>
            </dt>
            <dd>
                <p>我的全家福</p>
                <p>30<b>张</b></p>
            </dd>
        </dl>

<div class="mei">
    <p></p>
    <span>没有了</span>
    <p></p>
</div>
</section>
<footer>
     <router-link to="/bxcz" tag="span">相册</router-link></router-link>
     <router-link to="/bzhaopian_shangchuan" tag="span">照片</router-link>
     <router-link to="" tag="span">视频</router-link>

</footer>     
</div>
</template>
<script>
export default{
    name:'b_q_y_x',
    data(){
        return{
            title:'修改关系',tit:"取消",tit1:"确定"
        }
    },
    mounted(){
        this.$emit('toparent',{ title:'修改关系',tit:"取消",tit1:"确定"
        })
    }
}
</script>
<style>
.xiu{height:90vh;display:flex;flex-direction:column;}
section{flex:1;overflow:auto;}
footer {height:40px;background:dodgerblue;display:flex;justify-content: space-around;}
footer span{display:block;width:20%;height:40px;background:dodgerblue;text-align:center;line-height:40px}



.mei{width:100%;display:flex;justify-content: space-around;align-items:center;height:30px;}
.mei p{width:40%;height:5px;background:#ccc}


.guan{width:80%;margin:5px auto;height:40px;width:90%;border:1px solid #000;border-radius : 10px;}
.guan div{float:left;width:50%;height:100%;text-align:center;line-height:40px}
.guan select{width:50%;height:100%;text-align:center;line-height:40px;float:left;border:none;border-top-right-radius:10px;border-bottom-right-radius:10px;}
.guan select option:hover{background:#0f0}

dl{height:140px;width:110px;margin:10%;float:left}
dt{width:110px;height:110px;border-radius:10px;background:#ccc;text-align:center;line-height:110px}

dt img{width:110px;height:110px;border-radius:10px;background:#ccc}

dd{height:40px;}
dd p{height:20px;text-align:right;line-height:20px}
</style>

