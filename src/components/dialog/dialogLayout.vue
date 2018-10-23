<template>
    <div class="dialogLayout">
        <kosopuz v-if="activeChar == 'kosopuz'" class = "mainHero"></kosopuz>        
        <dialogCloud class = "dialogCloud">
            <p>{{activeText}}</p>
            <template slot = "skipButton">
                <div v-on:click="nextChat" class="skipButton">Далее</div>
            </template>
        </dialogCloud>
        <dialogChar v-bind:type="activeChar"/>
    </div>
</template>

<script>
import kosopuz from '../kosopuzImage.vue'
import dialogChar from '../professor.vue'
import dialogCloud from './dialogCloud.vue'

export default {
    name:'dialogLayout',
    data:function(){
        return{
            activeIndex:0,
        }
    },
    computed:{
        activeText:function(){
            return (this.dialog.body[this.activeIndex].text || '')
        },
        activeChar:function(){
            return (this.dialog.body[this.activeIndex].char || 'kosopuz')
        }
    },
    components:{
        dialogCloud,
        kosopuz,
        dialogChar
    },
    methods:{
        nextChat:function(){
            if(this.activeIndex < this.dialog.body.length-1){
                this.activeIndex++
            }else{
                this.onEnd()
            }
        },
        onEnd:function(){
            this.dialogEnd(this.dialog.id || 'Dialog End')
        }
    },
    props:[
        'dialogEnd',
        'dialog'
    ],
}
</script>

<style>
.dialogCloud{
    position: relative;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 8px;
}

.skipButton{
    cursor: pointer;
    position: absolute;
    width: 80px;
    height: 40px;
    font-family: izhitsa-cyrillic;
    color:#d17702;
    font-size: 32px;
    bottom: 10px;
    right: 30px;
}
.mainHero{
    position: relative;
    bottom: -60px;
}
.dialogLayout{
    display: flex;
    align-items: flex-end;
}
</style>
