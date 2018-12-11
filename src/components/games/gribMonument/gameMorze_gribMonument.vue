<template>
    <div class="morze_wrap">
        <div class = "morze_message">
            <div class="morze_message__title">Сообщение от Академика:</div>
            <div class = "morze_message__item">--* --- *-* --- -** *** -*- --- --* *---    *--* *- *-* -*-</div>
        </div>
        <div class="morze_bottom">
            <div class="morze_text">
                <input type="text" v-model="text" class = "morze_text__input"/>
                <div class = "morze_text_confirm" @click="confirm()">Подтвердить</div>
            </div>
            <div class="morse_image">
                <img src="../../../assets/images/alphabet_morse.png" width="400" height="400" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import  {bus} from './../../../main.js'
export default {
    data(){
        return{
            text:''
        }
    },
    methods:{
        confirm(){
            if(this.text.toLowerCase().replace(/\s/,'') == 'городскойпарк'){
                bus.$emit('dialogAction', 3202)
            }else{
                bus.$emit('dialogAction', 3201)
            }
        }
    }

}
</script>
<style scope>
    .morze_text{
        flex: 1;
        width: 400px;
    }
    .morze_text__input{
        padding: 15px;
        outline: none;
        display: flex;
        font-size: 40px;
        width: 600px;
        margin: 0 auto;
        height: 60px;
        border: 2px solid #000;
        border-radius: 20px;
        background: #e8d0aa;
    }
    .morze_text_confirm{
        cursor: pointer;
        width: 600px;
        font-family: izhitsa-cyrillic;
        font-size: 24px;
        padding: 15px;
        text-align: center;
        margin: 20px auto;
        border: 2px solid #000;
        border-radius: 10px;
        background:#eeca92;
    }
    .morse_image{
        margin-right: 20px;
    }
    .morze_wrap{
        padding-top: 120px;
    }
    .morze_bottom{
        margin-top: 20px;
    }
    .morze_message__item{
        margin-top: 40px;
        font-size: 36px;
    }
    .morze_message__title{
        color: #e8740c;
        font-size: 24px;
    }
    .morze_message{
        font-family: izhitsa-cyrillic;
        
        padding: 15px;
        border:2px solid #000;
        border-radius: 40px;
        margin: 0 auto;
        width: 950px;
        height: 200px;
        background: #eeca92;
    }

    .morze_bottom{
        justify-content: space-between;
        display: flex;
    }
</style>
