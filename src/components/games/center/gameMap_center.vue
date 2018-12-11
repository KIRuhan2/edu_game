<template>
    <div class="coords_map__wrap">
        <div class="hint">
            <div class="hint_button"></div>
            <div class="hint_text">
                <div class = "hint_text__item" @click = "cheat">Координаты</div>
                <div class = "hint_text__item">(-12;2)</div>
                <div class = "hint_text__item">(-9;-4)</div>
                <div class = "hint_text__item">(-3;-3)</div>
                <div class = "hint_text__item">(-2;-6)</div>
                <div class = "hint_text__item">(1;-2)</div>
                <div class = "hint_text__item">(7;-2)</div>
                <div class = "hint_text__item">(8;-1)</div>
                <div class = "hint_text__item">(11,1)</div>
                <div class = "hint_text__item">(4;4)</div>
                <div class = "hint_text__item">(-1;1)</div>
                <div class = "hint_text__item">(-5;2)</div>
            </div>
        </div>
        <div class="coords_map">
            <div 
                class="coords_map__point"
                v-for="point in createPoints"
                :key = "point.key"
                @click = "checkPoint(point, $event)"
                :style= "point.style"
                
                >
                <div class="line"
                    :style = "point.styleLine"
                ></div>
            </div>
        </div>
    </div>
</template>
<script>
import {bus} from '../../../main.js'
export default {
    name:'gameMap_center',
    data(){
        return{
            test:0,
            nextPoint:0,
            points:[],
            allowedPoints:[
                {x:10,y:6,  number:0},
                {x:13,y:12, number:1},
                {x:19,y:11, number:2},
                {x:20,y:14, number:3},
                {x:23,y:10, number:4},
                {x:29,y:10, number:5},
                {x:30,y:9,  number:6},
                {x:33,y:7,  number:7},
                {x:26,y:4,  number:8},
                {x:21,y:7,  number:9},
                {x:17,y:6,  number:10}
            ]
        }
    },
    methods:{
        checkPoint(point, event){
            console.log(point.coords.x+' '+point.coords.y)
            // console.log(event.target.children[0])
            if(point.coords.x == this.allowedPoints[this.nextPoint].x && point.coords.y == this.allowedPoints[this.nextPoint].y){
                this.createPoints[point.key].line = event.target.children[0]
                if(this.nextPoint > 0){
                    console.log(this.createPoints[this.nextPoint])
                }
                this.nextPoint++
                point.styleLine = {

                }
                point.style.background = 'blue'
                point.style.opacity = 1
                console.log(this.nextPoint)
                if(this.nextPoint > 10){
                    bus.$emit('dialogAction', 2003)
                }
            }else{
                bus.$emit('dialogAction', 2002)
            }
        },
        cheat(){
            console.log('Win Cheat')
            bus.$emit('dialogAction', 2003)
        }
    },
    computed:{
        createPoints(){
            //x -45
            let cols = 0
            let rows = 0
            for(let i=0; i<1103;i++){
                let colorSet = 'white';
                if(cols > 45){
                    cols = 0
                    rows++
                }
                this.points.push({
                    key:i,
                    active: false,
                    coords:{
                        x:cols,
                        y:rows
                    },
                    line:null,
                    styleLine:{
                        
                    },
                    style:{
                        "background":colorSet,
                        "position":"absolute",
                        "left":`${25*cols+25+3.5*cols-2.5}px`,
                        "top":`${rows*20+20+rows*7.3-2}px`,
                    },
                })
                cols= cols+1
            }
            return this.points
        }        
    },
}
</script>

<style>
    .hint{
        position: absolute;
        top: 0;
        right: 40px;
        font-size: 20px;
        font-family: 'izhitsa-cyrillic';
        z-index: 3;
        padding: 25px;
        border: 4px solid #000;
        background: #eeca92;
    }

    .hint_text__item:first-child{
        margin-bottom: 20px;
    }
    .coords_map__wrap{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .coords_map__point{
        width: 10px;
        height: 10px;
        opacity: 0.2;
        border-radius: 50%;
    }
    .coords_map__point:hover{
        transform: scale(4);
        
    }
    .coords_map__point .line{
        background: red;
        position: relative;
        top: 2.5px;
    }
    .coords_map{
        position: relative;
        display: flex;
        margin: 0 auto;
        height: 650px;
        width: 1280px;
        background: url('../../../assets/images/mapCoords.jpg') no-repeat;
    }
</style>

