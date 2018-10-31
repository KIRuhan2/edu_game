<template>
  <p class = "gameTitle">Приключения Косопуза</p>
</template>

<script>
export default {
  name: 'gameTitle',
  data: function(){
    return{
     // msg = "message"
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'izhitsa-cyrillic';
  src: url('../../assets/fonts/izhitsa-cyrillic.ttf');
}
p{
  text-align: center;
  font-size: 3em;
  color:#f4af55;
  font-family: izhitsa-cyrillic;
}
</style>
