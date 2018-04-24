<template>

	<div class="my">
		
	
		<personal-item>个人信息</personal-item>

        
	
		<!--<di-bu>底部</di-bu>-->


	</div>

</template>

<script>
    import bus from '../Bus.js';
	import PersonalItem from "../components/my/PersonalItem";
	import Dibu from "../components/Dibu";
    import placeholder from "../assets/img/首页_1/u9323.png";
	import placeholder1 from "../assets/img/首页_1/u9062.png";
	export default {
		name: "my",
		data(){
			return{
				showMenu: false,	
				placeholder1,
			}
		},
        components: {
            "personal-item": PersonalItem,
			"di-bu": Dibu,
        },
		methods: {
			
		},
	    created() {
	  	   
	    }
	}
</script>

<style scoped>
.my{
	width: 100%; height: 100vh;
    /*background-color: gray;*/
}
	


</style>