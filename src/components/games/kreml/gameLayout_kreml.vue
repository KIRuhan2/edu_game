<template>
    <div class="gameLayout">
        <gameSequence v-if="activeGame =='kreml_sequence'" :gameActions="gameActions" :gameEnd="nextGame"/>
        <gameFillword v-if="activeGame == 'kreml_fillword'" :gameEnd="nextGame" />
        <gamePo v-if="activeGame == 'kreml_po'" :gameEnd="nextGame" />
    </div>
</template>
<script>
import gameFillword from './gameFillword_kreml'
import gameSequence from './gameSequence_kreml'
import gamePo from './gamePo_kreml'
export default {    
    name: 'gameLayout_kreml',
    props:['game'],
    data: function(){
        return{
            gameActions: 'default',
            activeGame:this.game
        }
    },
    methods:{
        nextGame(id){
            if(id=='sequence_default'){
                this.activeGame = 'kreml_fillword'
            }else if(id=='fillword'){
                this.activeGame = 'kreml_sequence'
                this.gameActions = 'programs'
            }else if(id == 'sequence_programs'){
                this.activeGame = 'kreml_po'
            }
        }
    },
    components:{
        gameSequence,
        gameFillword,
        gamePo
    }
}
</script>
<style>

</style>

