<template>
    <div class="gameLayout">
        <gameMap v-if="activeGame == 'center_map'" :gameEnd="nextGame" />
        <gameEquals  v-if="activeGame == 'center_equals'" :gameEnd="nextGame" />
    </div>
</template>
<script>
import gameMap from './gameMap_center'
import gameEquals from './gameEquals_center'
export default {  
    name: 'gameLayout_center',
    props:['game'],
    data: function(){
        return{
            gameActions: 'default',
            activeGame:this.game
        }
    },
    watch:{
        game(newGame){
            this.activeGame = newGame
        }
    },
    methods:{
        nextGame(id){
            if(id == 'map'){
                this.activeGame = 'center_equals'
            }
        }
    },
    components:{
        gameMap,
        gameEquals
    }
}
</script>
<style>

</style>

