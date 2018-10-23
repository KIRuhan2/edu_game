<template>
    <icon v-bind:class="[groundClass, classes.kosopuz_image]" />
</template>


<script>
import icon from '../assets/images/icon.svg'
export default {
  name: 'kosopuzImage',
  data: function(){
    return{
        classes:{
          kosopuz_image:'kosopuz_image'
        },
    }
  },
  computed:{
    groundClass(){
      if(this.ground)
        return 'groundActive'
      else
        return 'groundHidden'
    }
  },
  props: [
    'size',
    'ground',
    'rotate'
  ],
  components:{
    icon
  }
}
</script>
<style lang="less" scoped>
  .kosopuz_image{
    .str1 {stroke:black;stroke-width:0.261462}
    .str2 {stroke:black;stroke-width:0.653655}
    .str0 {stroke:black;stroke-width:1.96096}
    .str3 {stroke:#0D0D0D;stroke-width:1.96096}
    .fil0 {fill:black}
    .fil2 {fill:#00A4E8}
    .fil1 {fill:#0772B1}
    .fil15 {fill:#212125}
    .fil13 {fill:#F0C900}
    .fil16 {fill:white}
    .fil3 {fill:#0D0D0D}
    .fil6 {fill:#942921}
    .fil12 {fill:#A42D22}
    .fil11 {fill:#AE816C}
    .fil9 {fill:#C2A28E}
    .fil7 {fill:#DDB9A1}
    .fil8 {fill:#EBCDBB}
    .fil14 {fill:#EC1A23}
    .fil4 {fill:#EEDAC9}
    .fil10 {fill:#FEFDFE}
  }
  .groundHidden{
    .fil5 {
      fill: #B3C758;
      visibility: hidden;
    }
  }
  .groundActive{
    .fil5{
      fill: #B3C758;
      visibility: visible;
    }
  }
</style>
