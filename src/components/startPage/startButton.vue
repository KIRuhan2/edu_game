<template>
    <div @click="startGame" class = "startbutton">Играть</div>
</template>

<script>
export default {
    name:'startButton',
    methods:{
        startGame(){
            this.$emit('gameStart')
        }
    }
}
</script>
<style scoped>
    .startbutton{
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 10px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 45px;
        height: 60px;
        background: #f49846;
        padding: 0 80px;
        margin-top: 80px;
    }
</style>

