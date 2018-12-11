<template>
    <div class="gameEquals"
        @mouseup="endDrag($event)"
        @mousemove="mousemove($event)"    
    >
        <div class="equals">
            <div class="equal">
                <div class="equal__number">1</div>
                <div class="equal__text">
                    x<sup>2</sup>&nbsp+ <div class = "empty"></div> + 4y<sup>2</sup> = (x + 2y)<sup>2</sup>
                </div>
            </div> 
            <div class="equal">
                <div class="equal__number">2</div>
                <div class="equal__text"> 
                    x<sup>3</sup>&nbsp+ 8y<sup>3</sup> = (x + 2y)(x<sup>2</sup> - <div class = "empty"></div> + 4y<sup>2</sup>)
                </div>
            </div>
            <div class="equal">
                <div class="equal__number">3</div>
                <div class="equal__text">
                    (a - xy)(a + xy) = a<sup>2</sup> - <div class="empty"></div>
                </div>
            </div>
            <div class="equal">
                <div class="equal__number">4</div>
                <div class="equal__text">
                    4x<sup>2</sup>&nbsp+ <div class="empty"></div> + 4y<sup>2</sup> = (2x + 2y)<sup>2</sup>
                </div>
            </div>
        </div>
        <div class="answers">
            <div 
                v-for="answer in answers" 
                :key="answer.key"
                class = "answer"
                :style = "answer.style"
                @mousedown.prevent="answer.isDrag = true; answer.elem = $el;  ;answer.drag = {x:$event.x,y:$event.y}"                
            >
                <div class="answer__number">{{answer.number}}</div>
                <div class="answer__text" v-html="answer.text"></div>                
            </div>
        </div>
    </div>

</template>
<script>
import {bus} from '../../../main.js'
export default {
    name:'gameMap_equals',
    data(){
        return{
            answers:[
                {
                    number: 1,                    
                    isDrag:false,
                    group:'1',
                    status:false,
                    current:{x:0,y:0},
                    el:null,
                    offset:{x:0,y:0},
                    style:{
                        
                        zIndex:1,
                        transform:`translate()`,
                    },                                        
                    text:'2xy',
                },
                {
                    number: 2,                    
                    isDrag:false,
                    group:'2',
                    status:false,
                    current:{x:0,y:0},
                    el:null,
                    offset:{x:0,y:0},
                    style:{
                        
                        zIndex:1,
                        transform:`translate()`,
                    },                                        
                    text:'8xy'
                },
                {
                    number: 3,                    
                    isDrag:false,
                    group:'3',
                    status:false,
                    current:{x:0,y:0},
                    el:null,
                    offset:{x:0,y:0},
                    style:{
                        
                        zIndex:1,
                        transform:`translate()`,
                    },                                        
                    text:'4xy'
                },
                {
                    number: 4,                    
                    isDrag:false,
                    group:'4',
                    status:false,
                    current:{x:0,y:0},
                    el:null,
                    offset:{x:0,y:0},
                    style:{
                        
                        zIndex:1,
                        transform:`translate()`,
                    },                                        
                    text:'x<sup>2</sup>y<sup>2</sup>'
                }
            ]
        }
    },   
    methods:{
        groupIs(x, y){
            if      (x > 160 && x < 240 && y > -560 && y < -480){
                return '3'
            }else if( x > 450 &&  x < 540 &&   y > -450 &&  y < -370){
                return '1'
            }else if( x > 444 &&  x < 520 &&   y > -330 &&  y < -250){
                return '4'
            }else if( x > 170 &&  x < 245 &&   y > -215 &&  y < -150){
                return '2'
            }else{
                return false
            }          
        },        
        mousemove: function(event){
            this.answers.forEach((answer,key)=>{
                if(answer.isDrag){
                    let str =  `translate(${ -answer.drag.x + event.x+answer.current.x || 0}px, ${ -answer.drag.y + event.y + answer.current.y || 0}px)`
                    this.answers[key].style = {transform:str, zIndex:10}
                }                                           
            })
        },
        endDrag: function(event){
            this.answers.forEach(answer=>{
                if(answer.isDrag){
                    answer.style.zIndex = 1
                    answer.current.x =  -answer.drag.x + answer.current.x  + event.x
                    answer.current.y =  -answer.drag.y + answer.current.y  + event.y
                    answer.offset.x = answer.elem.offsetLeft+answer.elem.offsetWidth/2
                    answer.offset.y = answer.elem.offsetTop+answer.elem.offsetWidth/2                   
                    answer.isDrag = false
                    if(this.groupIs(answer.current.x+265*(answer.number-1), answer.current.y) == answer.group){
                        answer.status = true
                    }else{
                        answer.status = false
                    }
                }
            })
            let done = true
            this.answers.forEach(answer=>{
                if(answer.status == false)
                    done = false
            })
            if(done)
                bus.$emit('dialogAction', 2004)
            
        },               
    }
}
</script>
<style>
sup{
    position: relative;
    top: -10px;
    font-size: 24px;
}
.gameEquals{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.equals{
    border: 4px solid #000;
    border-radius: 60px;
    margin-top: 20px;
    width: 800px;
    padding: 60px;
    background: #eeca92;
}
.equal{
    display: flex;
    align-items: center;
    word-spacing: 8px;
    font-family: sans-serif;
    font-size: 36px;
    margin-bottom: 25px;
}

.answers{
    width: 920px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;

}

.answer{
    cursor: pointer;
    display: flex;
    padding: 22px;
    border: 4px solid #000;
    border-radius: 20px;
    max-width: 120px;
    background: #eeca92;   
    position: relative ;
    margin-bottom: 10px;
}

.answer__number{
    position: absolute;
    border-radius: 50%;
    top: 0px;
    left: -20px;
    width: 30px;
    height: 30px;
    background: #f49846;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'izhitsa-cyrillic';
    font-size: 18px; 
    flex: 1;
}

.answer__text{
    flex: 4;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 32px;    
}
.equal__text{
    display: flex;
    align-items: center
}

.equal__number{
    display: flex;
    justify-content: center;
    align-items:center; 
    border-radius: 50%;
    font-family: 'izhitsa-cyrillic';
    font-size: 24px;
    width: 30px;
    height: 30px;
    background: #f49846;
    margin-top: 8px;
    margin-right: 20px;
}
.empty{
    position: relative;
    display: inline-block;
    margin:0 10px;
    background: #f7f7f7;
    border-radius: 20px;
    border: 4px solid #000;
    width: 100px;
    height: 80px;
}
</style>

