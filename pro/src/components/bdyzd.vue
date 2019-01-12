<template>
    <div>
        <div class="zi">
            <h2>自定义第一次</h2>
            <input type="text" placeholder="请输入名字">
            <span class="ti" @click="ti">完成</span>
        </div>
    
    </div>
</template>
<script>
    export default{
        name:'bdyzd',
        data(){
            return{
                title:"自定义第一次",
                
            }
        },
        methods:{
            ti(){
                this.$router.push('/bdy1')
            }
        },
        mounted(){
             this.$emit("toparent",this.title);
             
        }

    }
</script>
<style scoped="">
.zi{width:70%;height:200px;background:#ccc;margin:100px auto;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content: center}
.zi h2{font-size:18px;}
.zi input{width:50%;height:30px;margin-top:20px;text-align:center;}
.zi .ti{display:block;width:50%;height:30px;margin-top:20px;text-align:center;}

</style>