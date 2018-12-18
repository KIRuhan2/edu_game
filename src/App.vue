<template>
  <div v-bind:class="[page.status,'wrap']">
    <startPage v-on:gameStart ="gameStart" v-if="page.status === 'startpage'"></startPage>
    <mapLayout :target ="target" :clickable="allowedToClick" v-if="page.status !== 'startpage'"></mapLayout>
    <dialogLayout  :dialogEnd="dialogEnd"  :dialog="dialogText" v-if="page.status === 'dialog'"></dialogLayout>
    <location_bg v-show ="page.bg" :image="page.bg"></location_bg>
    <gameLayout v-if = "page.game" :game= "page.game"/>
    <!-- <div class = "doSave" @click="save.saveBar = true" :class="save.saveBar ? '': 'doSave_hidden'">
      <div class="doSave__close" v-show="save.saveBar" @click.stop="save.saveBar = false">Close</div>
      <div class="doSave_text" v-show="save.saveBar" @click.stop="save.show = !save.show">Dev_saves</div>
      <div class="doSave_wrap" v-show = "save.show && save.saveBar">
        <div class = "save" @click="doSave(save.id)" v-for="save in save.points" :key="save.id">{{save.text}}</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {bus} from './main.js'
import imagePreloader from 'vue-image-preloader'
import startPage from './components/startPage/startPage.vue'
import dialogLayout from './components/dialog/dialogLayout.vue'
import mapLayout from './components/map/mapLayout.vue'
import data from './assets/data.json'
import location_bg from './components/location.vue'
import gameLayout from './components/gameLayout.vue'
export default {
  name: 'app',
  components: {
    startPage,
    dialogLayout,
    mapLayout,
    location_bg,
    gameLayout,
    imagePreloader
  },
  data:function(){
    return{
      preload:[
        require('./assets/images/pc/case-disable.png'),
        require('./assets/images/pc/case.png'),
        require('./assets/images/pc/cpu-disable.png'),
        require('./assets/images/pc/cpu.png'),
        require('./assets/images/pc/disckDrive-disable.png'),
        require('./assets/images/pc/disckDrive.png'),
        require('./assets/images/pc/graphicCard-disable.png'),
        require('./assets/images/pc/graphicCard.png'),
        require('./assets/images/pc/hardDrive-disable.png'),
        require('./assets/images/pc/hardDrive.png'),
        require('./assets/images/pc/keyboard-disable.png'),
        require('./assets/images/pc/keyboard.png'),
        require('./assets/images/pc/mouse-disable.png'),
        require('./assets/images/pc/mouse.png'),
        require('./assets/images/pc/ram-disable.png'),
        require('./assets/images/pc/ram.png'),
        require('./assets/images/professor2.png'),
        require('./assets/images/kreml_background.jpg'),
        require('./assets/images/alphabet_morse.png'),
      ],
      test:[],
      save:{
        points: data.savePoints,
        show:false,
        saveBar:false,
        addActive:false
      },
      page:{
        bg:false,
        status:'startpage',  // startpage/dialog/mapview/ 
        game:false,
      },
      dragging:false,
      dialogText: data.dialogs[0],
      allowedToClick:[]
    }
  },
  created(){
    bus.$on('dialogAction', (id)=>{
      this.page.status = 'dialog'
      this.dialogText = data.dialogs.find((elem)=>{return(elem.id == id ? true : false)})
    })
  },
  mounted(){
    let images = []
    this.preload.forEach(str=>{
      let image = new Image()
      image.src = str
      images.push(image)
    })
  },
  methods:{

    saveHide(){
      this.saveBar = false
      //eslint-disable-next-line
      console.log('Why?')
    },
    doSave(id){
      this.save.points.forEach(saveItem => {
        if(saveItem.id == id){
          this.page = saveItem.page || this.page,
          this.allowedToClick = saveItem.allowedToClick || this.allowedToClick,
          this.dialogText = data.dialogs[saveItem.dialogId-1] || this.dialogText
        }
      });
    },
    gameStart(){
      this.page.status = 'dialog'
    },
    //eslint-disable-next-line
    target(name,event){
      if(this.allowedToClick.includes(name)){
        if(name == 'kreml'){
          this.page.bg = 'kreml'
          this.dialogText = data.dialogs[1]
          this.page.status = 'dialog' 
        }
        if(name == "center"){
          this.page.bg = 'center'
          bus.$emit('dialogAction', 2001)
        }
        if(name == 'grib_monument'){
          this.page.bg = 'grib_monument'
          bus.$emit('dialogAction', 3001)
        }
        if(name == 'park'){
          this.page.bg = 'park'
          bus.$emit('dialogAction', 4001)
        }
      }
    },
    dialogEnd(id){
      switch(id){
        case(1):
          this.page.status = 'mapview'
          this.allowedToClick.push('kreml')
        break
        case(2):
          this.page.status = 'mapview'
          this.page.game = 'kreml_sequence'
        break
        case(1101):
          this.page.status = 'mapview'
        break
        case(1102):
          this.page.status = 'dialog'
          this.page.game = false
          this.dialogText = data.dialogs.find((elem)=>{return(elem.id == 1201 ? true : false)})
        break
        case(1201):
          this.page.status = 'mapview'
          this.page.game = 'kreml_fillword'     
        break
        case(1202):
          this.page.status = 'mapview'
          this.page.game = 'kreml_sequence'
        break
        case(1301):
          this.page.status = 'mapview'
          this.page.game = 'kreml_sequence'
          // this.page.game = 'kreml_po'
          // this.dialogText = data.dialogs.find(elem=>{return(elem.id == 1301 ? true : false)})
        break 
        case(1302):
          this.page.status = 'mapview'
        break
        case(1303):
          this.page.status = 'mapview'
          this.page.game = null
          bus.$emit('dialogAction', 1304)
        break
        case(1304):
          this.page.status = 'mapview'
          this.page.game = null
          this.page.bg = null
          this.allowedToClick.shift()
          this.allowedToClick.push('center')
        break
        case(2001):
          this.page.status = 'mapview'
          this.page.game = 'center_map'
        break
        case(2002):
          this.page.status = 'mapview'
        break
        case(2003):
          this.page.status = 'mapview'
          this.page.game = 'center_equals'
        break
        case(2004):
          this.page.status = 'mapview'
          this.page.bg = null
          this.page.game = null
          this.allowedToClick = ['grib_monument']
        break        
        case(3001):
          this.page.status = 'mapview'
          this.page.game = 'gribMonument_table'
        break
        case(3102):
          this.page.status = 'mapview'
          this.page.game = 'gribMonument_morze'
        break
        case(3202):
          this.page.status = 'mapview'
          this.page.bg = null
          this.page.game = null
          this.allowedToClick = ['park']  
        break
        case(4001):
          this.page.status = 'mapview'
          this.page.bg = null
          this.page.game = null
          this.allowedToClick = []  
        break         
        default:
          this.page.status = 'mapview'           
        break
      }
    }
  },
}

</script>

<style lang = "less" scope>
.wrap{
  overflow: hidden;
}
.startpage{
  width: 100%;
}

.mapview{
  width: 1300px;
  height: 800px;
  background-color: #42b0f6;
  position: relative;
}

.dialog{
  overflow: hidden;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #42b0f6;
  display: flex;
  width: 1300px;
  height: 800px;
}

#app{
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
}

.doSave{
  cursor: pointer;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  top: 0;
  right: 0px;
  width: 240px;
  padding: 20px 0;
  z-index: 1000;
  background: red;
}

.doSave__close{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 15;
  background: orange;
}

.doSave_hidden{
  content: '.';
  position: absolute;
  height: 80px;
  right: 0;
  width: 15px;
  background: #000;
}

.doSave_text{
  font-size: 32px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
}

.save{
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  font-size: 32px;
  height: 40px;
  padding: 5px;
  margin-top: 15px;
  display: flex;
  align-items: center;
}

</style>
