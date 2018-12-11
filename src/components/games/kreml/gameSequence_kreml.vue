<template>
    <div  @mouseup="endDrag($event)" @mousemove="doDrag($event)" class="gameSequence_kreml">
        <div class="gameSequence_kreml__title">Порядок действий:</div>
        <div class="actions_wrap">
            <template  v-for="action in actionsOrder">
                <div class="action"
                :key="action.id"
                @mousedown.prevent="action.drag = $event.y || 1"
                :style="action.style">
                    {{action.text}}
                </div>
                <!-- eslint-disable-next-line -->
                <div class="action__arrow" v-if="action.order!=actionsOrder.length"></div>
            </template>
        </div>
        <div class="button" @click="check()">Подтвердить</div>
    </div>
</template>
<script>
import {bus} from '../../../main.js'
import { defaultCoreCipherList } from 'constants';
export default {
    name:'gameSequence_kreml',
    props:['gameEnd', 'gameActions'],
    data:function(){
        return{
            actions:{
                default:[
                    {
                        text:'Включить компьютер.',
                        id:2,
                        order:1,
                        drag:false,
                        style: {},
                    },
                    {
                        text:'Собрать минимальный набор устройств ПК.',
                        id:1,
                        order:2,
                        drag:false,
                        style: {},
                    },
                    {
                        text:'Найти и распечатать файл Архивариуса.',
                        id:4,
                        order:3,
                        drag:false,
                        style: {},
                    },
                    {
                        text:'Установить необходимое программного обеспечение',
                        id:3,
                        order:4,
                        drag:false,
                        style: {},
                    },
                ],
                programs:[
                    {
                        text:'Сервисные программы',
                        id:2,
                        order:1,
                        drag:false,
                        style: {},
                    },
                    {
                        text:'Операционная система',
                        id:1,
                        order:2,
                        drag:false,
                        style: {},
                    },
                    {
                        text:'Системы программирования',
                        id:4,
                        order:3,
                        drag:false,
                        style: {},
                    },
                    {
                        text:'Прикладное ПО',
                        id:3,
                        order:4,
                        drag:false,
                        style: {},
                    },
                ]
            }

        }
    },
    computed:{
        actionsOrder:function(){
            // eslint-disable-next-line
            let action =  this.gameActions || 'default'
            return(this.actions[action].sort((a,b)=>(a.order-b.order)))
        },

    },
    methods:{
        check(){
            let dialogCallbackId
            if(this.gameActions == 'default'){
                dialogCallbackId = 1102
            }else if(this.gameActions == 'programs'){
                dialogCallbackId = 1103
            }
            this.actionsOrder.forEach((action)=>{
                if(action.order != action.id){
                    dialogCallbackId = 1101
                }
            })
            console.log('sequence_'+this.gameActions)
            if(dialogCallbackId == 1102 || dialogCallbackId == 1103){
                this.gameEnd('sequence_'+this.gameActions)
            }else{
                bus.$emit('dialogAction', dialogCallbackId)
            }
            
        },
        doDrag(event){
            this.actionsOrder.forEach(action => {
                if(action.drag){
                    action.style = {
                        transform: `translate(0,${event.y-action.drag}px)`,
                        zIndex:'15'
                    }
                }
            });
        },
        endDrag(event){
            let delta = 0
            let once = false
            this.actionsOrder.forEach(action=>{
                if(Math.abs(action.drag) >= 100){
                    delta  = (Math.abs(event.y-action.drag) <= 100) ? 0 : (Math.abs(event.y-action.drag) <= 250) ? 1 : (Math.abs(event.y-action.drag) <= 450) ? 2 : (Math.abs(event.y-action.drag) > 450) ? 3 : false
                    // eslint-disable-next-line
                    delta = delta*(event.y-action.drag)/Math.abs(event.y-action.drag)
                    if((action.order + delta) > 0 && (action.order + delta)<=4){
                        this.actionsOrder.forEach(row=>{
                            if(row.order == (action.order+delta) && !once){
                                row.order = action.order
                                action.order = action.order+delta
                                once = true
                            }
                        })
                    }
                }

            })
            this.actionsOrder.forEach(action=>{
                action.style = {}
                action.drag = false
            })
            return
        }
    },
}
</script>
<style>
    .gameSequence_kreml{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .action::selection{
        background: transparent;
    }
    .action{
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 15px 20px;
        font-size: 32px;
        margin: 20px 0;
        border: 4px solid #000;
        background: #eeca92;
    }
    .button{
        cursor: pointer;
        font-size: 24px;
        padding: 10px 20px;
        margin-top: 30px;
        background: #9cce67;
        border-radius: 10px;
    }
    .button::selection{
        background: transparent;
    }

    .actions_wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .action__arrow{
        width: 80px;
        height: 60px;
        background-size: cover;
        background: url('../../../assets/images/arrow_green.png') no-repeat center;

    }

    .gameSequence_kreml__title{
        font-size: 24px;
        padding: 0 20px 15px 20px;
        border-bottom: 2px solid #000;
    }
</style>
