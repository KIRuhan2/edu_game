<template>
    <div class="gameLayout">
        <gameTable v-if="activeGame =='gribMonument_table'" :gameEnd="nextGame"/>
        <gameMorze v-if="activeGame == 'gribMonument_morze'" :gameEnd="nextGame" />
    </div>
</template>
<script>
import gameTable from './gameTable_gribMonument'
import gameMorze from './gameMorze_gribMonument'
export default {
    name:'gameLayout_gribMonument',
    props:['game'],
    components:{
        gameTable,
        gameMorze
    },
    data(){
        return{
            name: 'gameLayout_gribMonument',
            props:['game'],
            activeGame:this.game
        }
    },
    methods:{
        nextGame(id){
        }
    },
    watch:{
        game(newGame){
            this.activeGame = newGame
        }
    },     
}
</script>

