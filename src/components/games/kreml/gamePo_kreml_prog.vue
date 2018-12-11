<template>
    <div
        :class = "['program', programm.name]"
        :style = "programm.style"
        @mousedown.prevent="programm.isDrag = true; programm.elem = $el; programm.drag = {x:$event.x,y:$event.y}"
    >
    </div>
</template>
<script>
export default {
    name:'prog_item',
    props:['programm'],
    data(){
        return{
            offset:0
        }
    }
}
</script>

