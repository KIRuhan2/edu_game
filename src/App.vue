<template>
  <div v-bind:class="[pageStatus,'wrap']">
    <startPage v-on:gameStart ="gameStart" v-if="pageStatus === 'startpage'"></startPage>
    <dialogLayout  :dialogEnd="dialogEnd"  v-bind:dialog="dialogText" v-if="pageStatus === 'dialog'"></dialogLayout>
  </div>
</template>

<script>
import startPage from './components/startPage/startPage.vue'
import dialogLayout from './components/dialog/dialogLayout.vue'
export default {
  name: 'app',
  components: {
    startPage,
    dialogLayout
  },
  data:function(){
    return{
      test:'',
      pageStatus:'startpage',
      dragging:false,
      dialogText:{
        id:1,
        body:[
          {
            text: "Текст Грибочка 1",
            char:'professor_Math'
          },
          {
            text:"Текст Профессора 1",
            char:'professor_Physics' //professor_Math(professor_Physics)
          },
          {
            text:"Текст Грибочка 2",
            char:'professor_Math'
          },
          {
            text:"Текст Грибочка 3",
            char:'kosopuz'
          }          
        ]
      },
    }
  },
  methods:{
    gameStart(){
      this.pageStatus = 'dialog'
    },
    dialogEnd(id){
      this.test = id
      this.pageStatus = 'startpage'
    }
  },
}

</script>

<style scope>
.startpage{
  width: 100%;
}
.dialog{
  overflow: hidden;
  display: flex;
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
</style>
