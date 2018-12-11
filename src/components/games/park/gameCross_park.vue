<template>
    <div class="cross">
        <div class="squares" v-for="square in squares">
            {{square.key}}
        </div>
    </div>
</template>
<script>
export default {
    name:'gameCross',
    data(){
        return{
            squares:[]
        }
    },
    computed:{
        squares(){
            for(let i=0; i<288; i++){
                this.squares.push({
                    key: i,
                })
            }
        }
    }
}
</script>
<style>

</style>


