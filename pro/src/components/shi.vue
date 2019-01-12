<template>
<div>
    
        
    
</div>
</template>
<script>

export default{
    name:'shi',
    data(){
        return{
            arr:[],
            
        }
    },
    mounted (){
        var _this=this;
        axios({
            method:'get',
            url:'http://www.aaa.com'
        }).then(function(data){
            _this.arr=data.data.use
        })

    }
}
</script>
<style>

</style>