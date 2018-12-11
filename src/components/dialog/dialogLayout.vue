<template>
    <div class="dialogLayout">
        <kosopuz v-if="activeChar == 'kosopuz'" class = "mainHero"></kosopuz>        
        <dialogCloud class = "dialogCloud">
            <p v-html= "activeText"></p>
            <template slot = "char_name">
                <div class="char_name" :class = "['char_name',charNamePosition]">{{activeCharName}}</div>
            </template>
            <template slot = "skipButton">
                <div v-on:click="nextChat" class="skipButton">Далее</div>
            </template>
        </dialogCloud>
        <dialogChar v-bind:type="activeChar"/>
    </div>
</template>

<script>
import kosopuz from '../kosopuzImage.vue'
import dialogChar from '../dialogChar.vue'
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
        },
        activeCharName:function(){
            return(this.dialog.body[this.activeIndex].name)
        },
        charNamePosition:function(){
            return(this.dialog.body[this.activeIndex].name != 'Косопуз' ? 'char_name__right' : '')
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

.char_name{
    position: absolute;
    top: -31px;
    left: 30px;
    padding: 0 20px;
    border-radius: 10px 10px 0 0;
    border: 4px solid #000;
    border-bottom: none;
    background: #eeca92;
    color:#d17702;
    font-family: izhitsa-cyrillic;
    font-size: 24px;
}

.char_name__right{
    left: auto;
    right: 30px;
}
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
    position: absolute;
    width: 100%;
    z-index: 20;
    align-items: flex-end;
}
</style>
