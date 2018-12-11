<template>
    <div class="gameLayout">
        <gameLayout_kreml v-if="location == 'kreml'" :game="game"  />
        <gameLayout_center v-if="location == 'center'" :game="game" />
        <gameLayout_gribMonument v-if="location == 'gribMonument'" :game="game"/>
    </div>
</template>
<script>
import gameLayout_kreml from './games/kreml/gameLayout_kreml'
import gameLayout_center from './games/center/gameLayout_center'
import gameLayout_gribMonument from './games/gribMonument/gameLayout_gribMonument'
export default {
    name:'gameLayout',
    props:['game'],
    computed:{
        location(){
            return this.game.split('_')[0]
        }
    },
    components:{
        gameLayout_kreml,
        gameLayout_center,
        gameLayout_gribMonument
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

