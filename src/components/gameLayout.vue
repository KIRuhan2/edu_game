<template>
    <div class="gameLayout">
        <gameLayout_kreml v-if="location == 'kreml'" :game="game" />
    </div>
</template>
<script>
import gameLayout_kreml from './games/kreml/gameLayout_kreml'
export default {
    name:'gameLayout',
    props:['game'],
    computed:{
        location(){
            return this.game.split('_')[0]
        }
    },
    components:{
        gameLayout_kreml
    }
}
</script>
<style>
 .gameLayout{
    font-family: sans-serif;
    position: relative;
    height: 100%;
    z-index: 10;
 }
</style>

