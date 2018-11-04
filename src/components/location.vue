<template>
    <div class="location" :class = "bg"></div>
</template>

<script>
export default {
    name: 'location_bg',
    props:['image'],
    computed:{
        bg:function(){
           if(this.image == 'kreml'){
                return ('kreml_bg')
           }
        }
    }
}
</script>


<style>
    .dialog{
        background-color: #fff;
    }
    .kreml_bg{
        background-image: url('../assets/images/kreml_background.jpg');
    }
    .location{
        position: absolute;
        width: 100%;
        height: 100%;
        margin-top: 0px;
        background-color: #fff;
        background-size: cover; 
    }
</style>

