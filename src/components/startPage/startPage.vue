<template>
  <div v-bind:style="style" @mouseenter="startDrag" @mousemove = "doDrag" class="startPage">
    <gameTitle></gameTitle>
    <kosopuzImage v-bind:ground="false"/>
    <startButton @gameStart="gameStart"/>
  </div>
</template>

<script>
import gameTitle from './gameTitle.vue'
import kosopuzImage from '../kosopuzImage.vue'
import startButton from './startButton.vue'

export default {
  name: 'startPage',
  components: {
    gameTitle,
    kosopuzImage,
    startButton
  },
  props:[
    'size',
  ],
  data:function(){
    return{
      check:false,
      dragging:false,
      x:0,
      y:0,

    }
  },
  methods:{
    gameStart(){
      this.$emit('gameStart')
    },
    startDrag() {
      this.dragging = true;
      // this.x = this.y = 0;
    },
    stopDrag() {
      this.dragging = false;
      // this.x = this.y = 'no';
    },
    doDrag(event) {
      if (this.dragging) {
        window.requestAnimationFrame(()=>{
          this.x = event.clientX;
          this.y = event.clientY;          
        })
      }       
    },
  },
  computed:{
    style(){
      return{
        'background-position':String(this.x/50+'px '+this.y/50+'px'),
        'width': (this.size ? this.size.width : '100%'),
        'height':(this.size ? this.size.height : '100vh')
      }
    }
  },
  mouted(){
    var image = new Image();
    image.src = "../src/assets/images/professor2.png"
    image.onload(function(){  this.check = true })
    window.addEventListener('mouseup', this.stopDrag)
  }
}

</script>

<style>
.startPage{
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  backface-visibility: hidden;
  background: url('../../assets/images/bg.png');
}

.gameTitle{
  margin-top: 80px;
  margin-bottom: 20px;
}

*{
  padding: 0;
  margin: 0;
  border: 0;
}
body{
  display: flex;
  justify-content: center;
  background:#182f3f;
}
</style>
