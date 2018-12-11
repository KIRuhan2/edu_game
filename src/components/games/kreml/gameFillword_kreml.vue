<template>
    <div class="gameFillword_kreml" @mouseup="mouseUp()">
        <div class="fillword" @mousedown="$event.preventDefault()">
            <div v-for="(row,index) in fillwordData" :key="index" class="fillword__item">
                <div
                @mouseenter.stop="mouseIn(letter.x,letter.y)"
                @mousedown.stop.prevent="letterMouseDown(letter.x,letter.y)"
                :class="['fillword__item2',{'active':letter.active}]"
                :key="letter.id"
                :style = "letter.style"
                v-for="(letter) in fillwordData[index]">{{letter.text.toUpperCase()}}</div>
            </div>
        </div>
        <div class="pc_parts">
            <div class = "pc_part"
                :key="item.id"
                :style="{backgroundImage: getPath(!item.active?item.image+'-disable':item.image)}"
                v-for="item in fillwordItems">
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from "../../../main.js"
import data from "../../../assets/data.json"
export default {
    name:"gameFillword_kreml",
    props:['gameEnd'],
    data:function(){
        return{
            answers:['процессор', 'системныйблок', 'дисковод', 'клавиатура', 'мышь', 'дисковод', 'винчестер','видеокарта', 'оперативнаяпамять' ],
            fillwordItems:[
                {
                    id:0,
                    answer:'мышь',
                    active: false,  
                    style:{},
                    image: 'mouse'
                },
                {
                    id:1,
                    answer:'процессор',
                    active: false,
                    style:{},
                    image:'cpu'
                },
                {
                    id:2,
                    answer:'винчестер',
                    active: false,
                    style:{},
                    image:'hardDrive'
                },
                {
                    id:3,
                    answer:'клавиатура',
                    active: false,
                    style:{},
                    image:'keyboard'
                },
                {
                    id:4,
                    answer:'оперативнаяпамять',
                    active: false,
                    style:{},
                    image:'ram'
                },
                {
                    id:5,
                    answer:'видеокарта',
                    active: false,
                    style:{},
                    image: 'graphicCard'
                },
                {
                    id:6,
                    answer:'дисковод',
                    active: false,
                    style:{},
                    image: 'disckDrive'
                },
                {
                    id:7,
                    answer:'корпус',
                    active: false,
                    style:{},
                    image: 'case'
                },
                {
                    id:8,
                    answer:'монитор',
                    active: false,
                    style:{},
                    image: 'monitor'
                },    
                {
                    id:9,
                    answer:'принтер',
                    active: false,
                    style:{},
                    image: 'printer'
                }                                                                                    
            ],
            fillwordData: data.fillword,
            activeIndexes: [],
            activeText: [],
            fillwordText:'дискклатямкородгвьмасупвориноперокпраитятарвлотаоанктиюцуррниоанчестивремьерсорипдышсеирптвиретопера',
        }
    },
    methods:{
        letterMouseDown(x,y){
            this.fillwordData.forEach(row=>{
                row.forEach(letter=>{
                    if(letter.x == x && letter.y == y){
                        letter.active = true
                        this.activeText.push(letter.text)
                        this.activeIndexes = []
                        this.activeIndexes.push(
                            String(letter.x-1)+String(letter.y),
                            String(letter.x+1)+String(letter.y),
                            String(letter.x)+String(letter.y-1),
                            String(letter.x)+String(letter.y+1)
                        )
                    }
                })
            })
        },        
        findLetter(x,y){
            this.fillwordData.forEach(row=>{
                row.forEach(letter=>{
                    if(letter.x == x && letter.y == y){
                        this.letter = letter
                    }
                })
            })
        },
        mouseIn(x,y){
            this.fillwordData.forEach(row=>{
                row.forEach(letter=>{
                    if(letter.x == x && letter.y == y && !letter.active)
                        if(this.activeIndexes.includes(String(letter.x)+String(letter.y))){
                            this.activeIndexes = []
                            this.activeIndexes.push(
                                String(letter.x-1)+String(letter.y),
                                String(letter.x+1)+String(letter.y),
                                String(letter.x)+String(letter.y-1),
                                String(letter.x)+String(letter.y+1)
                            )                            
                            letter.active = true
                            this.activeText.push(letter.text)
                        }
                })
            })
        },
        mouseUp(){
            console.log(this.activeText.join(''))
            this.fillwordItems.forEach(item=>{
                if(item.answer == this.activeText.join('')){
                    item.active = true 
                    this.fillwordData.forEach(row=>{
                        row.forEach(letter=>{
                            if(letter.active){
                                letter.style={'background-color':'#36c332'}
                            }
                            
                        })
                    })
                    this.check()                     
                }
            })
            this.activeText = []
            this.activeIndexes = []
            this.fillwordData.forEach(row=>{
                row.forEach(letter=>{
                    letter.active = false
                })
            })            
        },
        getPath(image){
            return(`url(${require('../../../assets/images/pc/'+image+'.png')})`)
        },
        check(){
            if(!this.fillwordItems.find(elem=>{if(!elem.active) return true})){
                bus.$emit('dialogAction', 1202)
                this.gameEnd('fillword')
            }
        }
    },
    computed:{
    // 
    //          makeFillWordData(str){
    //              let rows = 0
    //              let lettersCount = 0
    //              let toReturn = []
    //              str.split('').forEach(letter=>{
    //                  if(!toReturn[rows]) toReturn.splice(rows,1,[])
    //                  toReturn[rows].push({
    //                      text:letter,
    //                      x:lettersCount - 10*rows,
    //                      y:rows,
    //                      id: String(lettersCount - 10*rows)+String(rows),
    //                      style:{},
    //                      active: false
    //                  })
    //                  if ((lettersCount+1)%10==0) rows++
    //                  lettersCount++
    //              })
    //              return toReturn
    //          }
    //      }
    }
}
</script>

<style>
    .fillword{
        margin-left: 20px;
        margin-top: 20px;
    }
    .gameFillword_kreml{
        display: flex;
    }
    .fillword__item{
        display: flex;
    }

    .fillword__item::selection{
        background: transparent;
    }

    .fillword__item2::selection{
        background: transparent;
    }

    .fillword__item2{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #eeca92;
        border: 2px solid #000;
        width: 70px;
        font-size: 32px;
        height: 70px;
    }

    .fillword__item2:hover{
        background: #a7762b;
    }
    .active{
        background: #a7762b;
    }
    .pc_parts{
        display: flex;
        flex-wrap: wrap;
    }
    .pc_part{
        display: flex;
        margin: 10px ;
        min-width: 250px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain; 
    }
</style>
