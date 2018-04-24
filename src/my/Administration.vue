<template>
	<div>
		
        <administration-item>产权管理</administration-item>

	</div>
</template>

<script>
    import bus from '../Bus.js';
	import AdministrationItem from "../components/my/AdministrationItem";
	import placeholder1 from "../assets/img/首页_1/u9062.png";

	export default {
		name: "administration",
        components: {
            "administration-item": AdministrationItem,
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