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
                return 'kreml_bg'
           }
           if(this.image == 'center'){
               return 'center_bg'
           }
           if(this.image == 'grib_monument'){
               return 'grib_monument_bg'
           }
            if(this.image == 'park'){
               return 'park_bg'
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
    .park_bg{
        background-image: url('../assets/images/park_background.jpg');
    }
    .center_bg{
        background-position: center;
        background-image: url('../assets/images/center_background.jpg');
        background-attachment: cover;
    }

    .grib_monument_bg{
        background-position: center;
        background-attachment: cover;
        background-image: url('../assets/images/monument_background.jpg');
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

