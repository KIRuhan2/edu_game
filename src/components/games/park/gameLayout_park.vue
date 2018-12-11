<template>
    <div class="gameLayout">
        <gameCross v-if="activeGame == 'park_cross'" />
    </div>
</template>
<script>
import gameCross from './gameCross_park.vue'
export default {    
    name: 'gameLayout_park',
    props:['game'],
    data: function(){
        return{
            gameActions: 'default',
            activeGame:this.game
        }
    },
    methods:{
        nextGame(id){
        }
    },
    components:{
        gameCross
    }
}
</script>
<style>

</style>

