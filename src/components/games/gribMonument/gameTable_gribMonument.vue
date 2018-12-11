<template>
    <div class="table_wrap">
        <div class="table">
            <div class="table_header">
                <div class="table_item">ФИО спортсмена</div>
                <div class="table_item">Пол</div>
                <div class="table_item">Возраст</div>
                <div class="table_item">Метание(очки)</div>
                <div class="table_item">Прыжок</div>
                <div class="table_item">Бег 60 м. (очки)</div>
                <div class="table_item">Бег 500 м. (очки)</div>
                <div class="table_item">Общее кол-во очков</div>
                <div class="table_item">Место</div>
            </div>
            <div class="table_row" @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Иванова А.</div>
                <div class="table_item">Ж</div>
                <div class="table_item">14</div>
                <div class="table_item">50</div>
                <div class="table_item">25</div>
                <div class="table_item">50</div>
                <div class="table_item">55</div>
                <div class="table_item">180</div>
                <div class="table_item">III</div>                
            </div>  
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Петров С.</div>
                <div class="table_item">М</div>
                <div class="table_item">12</div>
                <div class="table_item">57</div>
                <div class="table_item">20</div>
                <div class="table_item">21</div>
                <div class="table_item">69</div>
                <div class="table_item">167</div>
                <div class="table_item"></div>                
            </div>  
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Козлов М.</div>
                <div class="table_item">М</div>
                <div class="table_item">14</div>
                <div class="table_item">51</div>
                <div class="table_item">13</div>
                <div class="table_item">39</div>
                <div class="table_item">43</div>
                <div class="table_item">146</div>
                <div class="table_item"></div>                
            </div>
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Грачева М.</div>
                <div class="table_item">Ж</div>
                <div class="table_item">12</div>
                <div class="table_item">52</div>
                <div class="table_item">22</div>
                <div class="table_item">49</div>
                <div class="table_item">36</div>
                <div class="table_item">159</div>
                <div class="table_item"></div>                
            </div>              
            <div class="table_row" @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Васильева М.</div>
                <div class="table_item">Ж</div>
                <div class="table_item">15</div>
                <div class="table_item">47</div>
                <div class="table_item">24</div>
                <div class="table_item">46</div>
                <div class="table_item">49</div>
                <div class="table_item">166</div>
                <div class="table_item"></div>                
            </div>
            <div class="table_row" @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Борзых У.</div>
                <div class="table_item">Ж</div>
                <div class="table_item">15</div>
                <div class="table_item">47</div>
                <div class="table_item">27</div>
                <div class="table_item">11</div>
                <div class="table_item">46</div>
                <div class="table_item">131</div>
                <div class="table_item"></div>                  
            </div>
            <div class="table_row" @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Арбузова К.</div>
                <div class="table_item">Ж</div>
                <div class="table_item">14</div>
                <div class="table_item">43</div>
                <div class="table_item">23</div>
                <div class="table_item">34</div>
                <div class="table_item">17</div>
                <div class="table_item">117</div>
                <div class="table_item"></div>                
            </div>  
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Лукьянов П.</div>
                <div class="table_item">М</div>
                <div class="table_item">14</div>
                <div class="table_item">43</div>
                <div class="table_item">21</div>
                <div class="table_item">25</div>
                <div class="table_item">14</div>
                <div class="table_item">103</div>
                <div class="table_item"></div>                
            </div>
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Русь Д.</div>
                <div class="table_item">М</div>
                <div class="table_item">13</div>
                <div class="table_item">39</div>
                <div class="table_item">24</div>
                <div class="table_item">51</div>
                <div class="table_item">54</div>
                <div class="table_item">168</div>
                <div class="table_item"></div>                
            </div>             
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Жеберев О.</div>
                <div class="table_item">М</div>
                <div class="table_item">14</div>
                <div class="table_item">54</div>
                <div class="table_item">20</div>
                <div class="table_item">45</div>
                <div class="table_item">55</div>
                <div class="table_item">174</div>
                <div class="table_item">III</div>                
            </div>  
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Вилков М.</div>
                <div class="table_item">М</div>
                <div class="table_item">14</div>
                <div class="table_item">34</div>
                <div class="table_item">26</div>
                <div class="table_item">60</div>
                <div class="table_item">62</div>
                <div class="table_item">182</div>
                <div class="table_item">II</div>                
            </div>              
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Моргунов В.</div>
                <div class="table_item">М</div>
                <div class="table_item">13</div>
                <div class="table_item">36</div>
                <div class="table_item">15</div>
                <div class="table_item">48</div>
                <div class="table_item">58</div>
                <div class="table_item">157</div>
                <div class="table_item"></div>                
            </div>  
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Сойко В.</div>
                <div class="table_item">М</div>
                <div class="table_item">12</div>
                <div class="table_item">58</div>
                <div class="table_item">19</div>
                <div class="table_item">48</div>
                <div class="table_item">66</div>
                <div class="table_item">191</div>
                <div class="table_item">I</div>                
            </div>  
            <div class="table_row"  @click.prevent="rowClick($event.path[1].children[0].innerHTML)">
                <div class="table_item">Тюшина Ю.</div>
                <div class="table_item">Ж</div>
                <div class="table_item">13</div>
                <div class="table_item">46</div>
                <div class="table_item">21</div>
                <div class="table_item">53</div>
                <div class="table_item">36</div>
                <div class="table_item">156</div>
                <div class="table_item"></div>                
            </div>  
                                                                                                                                                                                             
        </div>
        <div class="bottom_wrap">
            <div class="conditions">
                <div class="conditions_item"><span></span>(Возраст спортсмена = 12) И (Пол спортсмена = «Ж») И (Общее кол-во очков ≥150)</div>
                <div class="conditions_item"><span></span>(Возраст спортсмена = 13) И (Пол спортсмена = «М») И (Общее кол-во очков ≥160)</div>
                <div class="conditions_item"><span></span>(Возраст спортсмена = 14) И ((Бег 60 м. ≥ 60) ИЛИ (Бег 500 м. ≥ 62))</div>
                <div class="conditions_item"><span></span>(Возраст спортсмена = 15) И (Метание ≥ 45) И (Прыжок ≥ 25))</div>
            </div>
            <div class="answrs">
                <div v-for="(answer) in answers" v-if="answer.show" :key="answer.key" class="answers__item">
                    <div class="close" @click="remove(answer.key)"><img width="15" height="15" src = "../../../assets/images/close.png"></div>
                    {{answer.name}}
                </div>
            </div>
        </div>
        <div class="confirm" @click="check()">
            Подтвердить
        </div>
    </div>  
</template>
<script>
import {bus} from './../../../main.js'
export default {
    name:'gribMonument_table',
    data(){
        return{
            answers:[              
            ],
        }
    },
    methods:{
        rowClick(el){
            let count = 0
            this.answers.forEach(item=>{
                if(item.show)
                 count++
            })
            if(el.length < 100 && count < 4){
                this.answers.push({
                    key:this.answers.length+1,
                    name:el,
                    show:true,
                })
            }
        },
        remove(key){
            this.answers[key-1].show = false
            console.log(this.answers[key-1].show)
        },
        check(){
            let answers = []
            let toCheck = [
                'Борзых У.',
                'Вилков М.',
                'Грачева М.',
                'Русь Д.',
            ]
            this.answers.forEach(ans=>{
                if(ans.show)
                    answers.push(ans.name)
            })
            answers = answers.sort()
            if(answers.join() == toCheck.join()){
                console.log("DONE")
                bus.$emit('dialogAction', 3102)
            }else{
                bus.$emit('dialogAction', 3101)
            }
        }
    }
}
</script>
<style scope>

.table_header{
    display: flex;
}

.table_item:first-child{
    border-left: 2px solid #000;
}

.table_row:hover .table_item{
    background: #f49846;
    cursor: pointer;
}

.table_row{
    border-top:  2px solid #000;
    display: flex;
}

.table_header .table_item{
    font-weight: bold;
    font-size: 15px;
}

.table{
    margin: 15px auto;
    width: 1200px;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
}

.table_item{
    text-align: center;
    flex: 1;
    border-right: 2px solid #000;
    padding: 5px 11px;
    padding-bottom: 5px;
    background: #eeca92;

}

.conditions{
    padding: 15px;
    margin-left: 25px;
    flex: 2;
    width: 750px;
    border:2px solid #000;
    border-radius: 20px;
    background: #eeca92;
}

.answrs{
    padding: 15px;
    background: #eeca92;
    border: 2px solid #000;
    border-radius: 20px; 
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: column;
    display: flex;
    flex: 1;
}

.close{
    margin-right: 10px;
    cursor: pointer;
}

.answers__item{
    display: flex;
    padding: 5px;
    font-weight: 600;
    background: #e89347;
    margin-bottom: 10px;
}

.conditions_item{
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    font-family: 24px;
    font-weight: bold;
}

.bottom_wrap{
    display: flex;
}

.conditions_item span{
    margin-right: 8px;
    border-radius: 50%;
    display: block;
    width: 10px;
    height: 10px;
    background:#e89347;
}
</style>

