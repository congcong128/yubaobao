<template>
    <div>
        <!-- 添加成长记录 -->
        <div class="tian">
            <ul>
                
                <li><span>身高</span><div><input type="text" placeholder="请输入身高"/><span>cm</span></div></li>
                <li><span>体重</span><div><input type="text" placeholder="请输入体重"/><span>kg</span></div></li>
                <li><span>日期</span>
                    <select>
                        <option>2018年10月29日</option>
                        <option>2013年10月29日</option>
                        <option>2015年10月29日</option>
                        <option>2011年10月29日</option>

                    </select>
                </li>
                
            </ul>
        </div>
        <div class="ti" @click="ti">确定</div>
    </div>
</template>
<script>
    export default{
        name:'bchengzhang_tianjia',
        data(){
            return{
                title:"添加成长记录",
                tit:""

            }
        },
        methods:{
            ti(){
                this.$router.push("/bchengzhang_jilu")
            }
        },
        mounted(){
            this.$emit('toparent',{title:'添加成长记录',tit:""})
        }


    }
</script>
<style  scoped="">
.tian{margin-top:10px;background:#ccc}
ul{width:90%;margin:0 auto;}
li{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #000;height:40px;width:100%}
input{text-align:right;height:38px;background:#ccc;border:none}
select{text-align:right;height:38px;background:#ccc;border:none}
.ti{height:40px;width:50%;margin:20px auto;background:#f00;text-align:center;line-height:40px;}
</style>