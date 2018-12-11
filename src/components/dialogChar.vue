<template>
    <professorMath v-if="type == 'professor_Math'"></professorMath>
	<div v-else-if="type == 'professor_Physics'" class = "professor2"></div>
	<div v-else-if="type == 'traveller'" class = "traveller"></div>
	<div v-else-if="type == 'sportsman'" class = "sportsman"></div>
	<div v-else-if="type == 'academy'" class = "academy"></div>
</template>

<script>

// Чары:  professor_Physics, professor_Math, kosopuz, traveller, sportsman

import professorMath from '../assets/images/professor1.svg'
export default {
	name:'dialogChar',
	props:['type'],
    components:{
        professorMath
    }
}
</script>

<style>
	.sportsman{
		width: 260px;
		height: 450px;
		background: url(../assets/images/sportsman.png) no-repeat center;		
	}
	.professor2{
		width: 250px;
		height: 450px;
		background: url(../assets/images/professor2.png) no-repeat center;
	}
	.traveller{
		width: 250px;
		height: 490px;
		background: url(../assets/images/traveller.png) no-repeat center;
	}
	.academy{
		width: 250px;
		height: 390px;
		background: url(../assets/images/academy.png) no-repeat center;
	}
	.st0{fill:#AA6F3D;}
	.st1{fill:#774829;}
	.st2{fill:#F8C09D;}
	.st3{fill:#A8C4CC;}
	.st4{fill:#FFFFFF;}
	.st5{fill:#E6E6E6;}
	.st6{fill:#F6AE8D;}
	.st7{fill:#EF937E;}
	.st8{fill:#333333;}
	.st9{opacity:0.81;fill:#DAEEF2;}
	.st10{opacity:0.81;fill:#FFFFFF;}
	.st11{fill:none;stroke:#333333;stroke-width:3;stroke-miterlimit:10;}
	.st12{fill:none;stroke:#DAEEF2;stroke-width:10;stroke-miterlimit:10;}
	.st13{fill:#D13924;}
	.st14{fill:#E8533A;}
	.st15{fill:#CC7C40;}
	.st16{fill:#4C2A0F;}
</style>
