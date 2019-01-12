<template>
<div class="shikan_detail">
    <section>
        <div class="shi">
       <video width="80%" height="140" src="" controls="controls"></video>
        <h2>宝贝计划</h2>
        </div>
        <div class="liao">
            <h2>评论</h2>     
			<ul id="ul">
				<li class="left">hello</li>
				<li class="right"></li>				
				<li class="right">
					hellhellhellhellhellhellhellhellhellhellhellhellhellhellhellhellhellhellhell</li>
			</ul>						
        </div>
       
</section>
 <footer>
      <input id="shu" type="text" placeholder="评论"/>
      <input @click="dian" id="bt" type="button" value="发送">
    </footer>
</div>
</template>
<script>
export default{
    name:'shikan_detail',
    methods:{
        dian(){
            $('')
		
        }
    }
    
}
   
</script>
<style>
.shikan_detail{
    display:flex;flex-direction:column;height:64vh;
}
section{flex:1;overflow:auto}
.shi{height:230px;background:#ccc;border-bottom:1px solid #000;
    display:flex;flex-direction:column;justify-content: center;align-items: center}

.shi h2{height:30px;line-height:30px;text-align:center;font-size:16px}


footer{flex:0;border-top:1px solid #000;height:40px;background:deepskyblue;width:100%}
footer input{height:40px;float:left;border:none}
footer input:first-child{width:90%;}
footer input:last-child{width:10%;}

.left{float:left}
.right{float:right}
 ul {margin:10px;
			
			
				overflow-y :auto
			}
			li{margin:5px 0;
			 max-width:250px;
			 width:auto;
			 border-radius:2px;
			 height:auto;
			 padding:3px 0;
			 clear:both;
			word-break:break-all;
			 }
			.left{float:left;background:#ccc;text-align:left }
			.right{float:right;background:#0f0;text-align:left}


</style>