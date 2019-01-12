<template>
<div>
    <div class="sou">
        <input type="text" class="txt"/>
        <button class="fan" @click="tap1()">取消</button>
    </div>
    
    
</div>

</template>
<script>
export default{
    name:"Sou",
    methods:{
        tap1(){
            this.$router.go(-1)
        }
    }
}

</script>
<style scoped="">
.sou{margin:0;padding:0;height:40px;background:#ccc;display:flex;justify-content: center;align-items:center}
input{float:left;border:none}
.txt{width:85%;height:30px;border-radius:10px;}
.sou .fan{float:right;width:40px;height:30px;}
</style>