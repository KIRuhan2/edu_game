<template>
    <div class="gameLayout">
        <gameSequence v-if="game =='kreml_sequence'" :gameEnd="nextGame"/>
        <gameFillword v-if="game == 'kreml_fillword'" :gameEnd="nextGame" />
    </div>
</template>
<script>
import gameFillword from './gameFillword_kreml'
import gameSequence from './gameSequence_kreml'
export default {
    name: 'gameLayout_kreml',
    props:['game'],
    data: function(){
        return{
            activeGame:this.game
        }
    },
    methods:{
        nextGame(id){
            if(id=='sequence'){
                this.activeGame == 'kreml_fillword'
            }else if(id=='fillword'){
                this.activeGame == 'last'
            }
        }
    },
    components:{
        gameSequence,
        gameFillword
    }
}
</script>
<style>

</style>

