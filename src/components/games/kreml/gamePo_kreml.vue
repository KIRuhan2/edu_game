<template>
    <div class="gamePo_wrap"
        @mouseup="endDrag($event)"
        @mousemove="mousemove($event)">
        <div class="case_wrap">
            <progCase
                :title="'Сервисные программы'"
                class="case_item">
            </progCase>
            <progCase
                :title= "'Операционная система'"
                class="case_item">
            </progCase>
            <progCase
                :title= "'Системы программирования'"
                class="case_item">
            </progCase>
            <progCase
                :title = "'Прикладное ПО'" 
                class="case_item">
            </progCase>
        </div>
        <div class="programs_wrap">           
            <progItem
                v-for="programm in progs"
                :class = "[programm.name]"
                :key = "programm.key"
                :programm = "programm">
            </progItem>
        </div>
        <div class="confirm" @click="check">Подтвердить</div>
    </div>
</template>

<script>
/* eslint-disable */ 
import { bus } from '../../../main.js'
import progItem from './gamePo_kreml_prog.vue'
import progCase from './gamePo_keml_case.vue'
import VueCollision from 'vue-collision'
export default {
    name:'gamePo_kreml',
    data:function(){
        return {
            progs:
            [
                {
                    name: 'adobereader',
                    isDrag:false,
                    elem:null,
                    type:{
                        group:'applied',
                        status:false,
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:0,
                    offset:{
                        x:0,
                        y:0
                    },
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'avast',
                    isDrag:false,
                    type:{
                        group:'service',
                        status:false,
                    },
                    elem:null,
                    current:{x:0,y:0},
                    drag: false,
                    key:1,
                    offset:{
                        x:0,
                        y:0
                    },
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'chrome',
                    isDrag:false,
                    type:{
                        group:'applied',
                        status:false,
                    },
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:2,
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'coreldraw',
                    isDrag:false,
                    type:{
                        group:'applied',
                        status:false,
                    },
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:3,
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'drweb',
                    isDrag:false,
                    type:{
                        group:'service',
                        status:false,
                    },
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:4,
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'linux',
                    isDrag:false,
                    type:{
                        group:'os',
                        status:false,
                    },
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:5,
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'macos',
                    isDrag:false,
                    type:{
                        group:'os',
                        status:false,
                    },
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:6,
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'openoffice',
                    isDrag:false,
                    type:{
                        group:'applied',
                        status:false,
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:7,
                    offset:{
                        x:0,
                        y:0
                    },
                    elem:null,
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'pascal',
                    isDrag:false,
                    type:{
                        group:'programming',
                        status:false,
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:8,
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'photoshop',
                    isDrag:false,
                    type:{
                        group:'applied',
                        status:false,
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:9,
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'winamp',
                    isDrag:false,
                    type:{
                        group:'applied',
                        status:false,
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:10,
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'windows',
                    isDrag:false,
                    type:{
                        group:'os',
                        status:false,
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:11,
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'winrar',
                    isDrag:false,
                    type:{
                        group:'service',
                        status:false,
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:12,
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                },
                {
                    name: 'сplus',
                    isDrag:false,
                    type:{
                        group:'programming',
                        status:false,
                    },
                    current:{x:0,y:0},
                    drag: false,
                    key:13,
                    elem:null,
                    offset:{
                        x:0,
                        y:0
                    },
                    style:{
                        zIndex:1,
                        transform:'translate()'
                    }
                }                           
            ],
            mouse_drag:{
                x:false,
                y:false,
            }            
        }
    },
    components:{
        progItem,
        progCase
    },
    computed:{
    },
    methods:{
        groupIs(coords){
            if      (coords.x > 30 && coords.x < 434 && coords.y > 80 && coords.y < 384){
                return 'service'
            }else if(coords.x > 30 && coords.x < 434 &&  coords.y > 430 && coords.y < 734){
                return 'programming'
            }else if(coords.x > 476 && coords.x < 880 &&  coords.y > 80 && coords.y < 384){
                return 'os'
            }else if(coords.x > 476 && coords.x < 880 &&  coords.y > 430 && coords.y < 734){
                return 'applied'
            }else{
                return false
            }          
        },
        check(){
            let done = true
            this.progs.forEach(prog=>{
                if(prog.type.status == false){
                    done = false
                }
            })
            if(done)
                bus.$emit('dialogAction', 1303)
            else
                bus.$emit('dialogAction', 1302)
        },
        endDrag: function(event){
            // this.mouse_drag.x = false
            // this.mouse_drag.y = false
            VueCollision.checkAllGroups()
            this.progs.forEach(prog=>{
                if(prog.isDrag){
                    prog.style.zIndex = 1
                    prog.current.x =  -prog.drag.x + prog.current.x  + event.x
                    prog.current.y =  -prog.drag.y + prog.current.y  + event.y
                    prog.offset.x = prog.current.x+prog.elem.offsetLeft+50
                    prog.offset.y = prog.current.y+prog.elem.offsetTop+50                   
                    prog.isDrag = false
                    if(this.groupIs(prog.offset) == prog.type.group){
                        prog.type.status = true
                        console.log(true)
                    }else{
                        prog.type.status = false
                    }
                }
            })
        },
        mousemove: function(event){
            this.progs.forEach((prog,key)=>{
                if(prog.isDrag){
                    let str =  `translate(${ -prog.drag.x + event.x+prog.current.x || 0}px, ${ -prog.drag.y + event.y + prog.current.y || 0}px)`
                    this.progs[key].style = {transform:str, zIndex:10}
                    //this.$set(this.progs[key], 'style', {transform: `translate(${ this.mouse_drag.x - event.x || 0}px, ${this.mouse_drag.y - event.y || 0}px)`})
                    // prog.style = {
                    //     transform: str
                    // }
                    // prog.upd(this.mouse_drag,event.x,event.y)
                }                                           
            })
        }
    },
    mounted(){
        bus.$emit('dialogAction', 1301) 
    },
}
</script>

<style>
.adobereader{
    background: url('../../../assets/images/progs/adobereader.png');
}

.avast{
    background: url('../../../assets/images/progs/avast.png');
}

.chrome{
    background: url('../../../assets/images/progs/chrome.png');
}

.coreldraw{
    background: url('../../../assets/images/progs/coreldraw.png');
}

.drweb{
    background: url('../../../assets/images/progs/drweb.png');
}

.linux{
    background: url('../../../assets/images/progs/linux.png');
}

.macos{
    background: url('../../../assets/images/progs/macos.png');
}

.openoffice{
    background: url('../../../assets/images/progs/openoffice.png');
}

.pascal{
    background: url('../../../assets/images/progs/pascal.png');
}

.photoshop{
    background: url('../../../assets/images/progs/photoshop.png');
}

.winamp{
    background: url('../../../assets/images/progs/winamp.png');
}

.windows{
    background: url('../../../assets/images/progs/windows.png');
}

.winrar{
    background: url('../../../assets/images/progs/winrar.png');
}

.сplus{
    background: url('../../../assets/images/progs/сplus.png');
}

 .confirm{
    position: absolute;
    width: 250px;
    cursor: pointer;
    color: #d17702;
    border: 4px solid #000;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content:center;
    align-items: center; 
    font-size: 32px;
    font-family: 'izhitsa-cyrillic';
    height: 80px;
    background: #eeca92;
    border-radius: 25px 25px 25px 25px;

 }
 .programs_wrap{
    flex-wrap: wrap;
    flex: 1;
    display: flex;
 }
 .program{
     cursor: pointer;
     background-position: center;
     background-repeat: no-repeat; 
     background-size: contain;
     width: 100px;
     height: 100px;
 }

 .gamePo_wrap{
     display: flex;
     height: 100%;
 }
 .case_wrap{
     margin-top: 80px;
     margin-left: 30px;
     width: 850px;
     height: 700px;
     justify-content: space-between;
     align-items: space-between;
     flex-wrap: wrap;
     display: flex;
 }

 .case_item{
     display: flex;
     justify-content: center;
     align-items: flex-start;
     width: 400px;
     height: 300px;
     border-radius: 20px;
     border: 2px solid #000;
     background: #eeca92;
 }
 .case_item__title{
     position: relative;
     top: -30px;
     background: #eeca92;
     border-radius: 10px 10px 0 0;
     border-left: 2px solid #000;
     border-right: 2px solid #000;
     border-top: 2px solid #000;
     padding: 0px 20px;
     text-align: center;
     color:#d17702;
     font-size: 24px;
     font-family: sans-serif;
 }
</style>
