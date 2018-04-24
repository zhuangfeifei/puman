<template>
	<div>
        <profit-item>收益</profit-item>
	</div>
</template>

<script>
    import bus from '../Bus.js';
	import ProfitItem from "../components/my/ProfitItem";
	import placeholder1 from "../assets/img/首页_1/u9062.png";

	export default {
		name: "profit",
        components: {
            "profit-item": ProfitItem,
        },
		data(){
			return{	
				placeholder1,
			}
		},
		methods: {
			
		},
	    created() {
	  	     
	    }
	}
</script>

<style scoped>

</style>