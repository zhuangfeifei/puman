<template>
	<div>
        <Information-item>新闻资讯</Information-item>
		
	</div>
</template>

<script>
import bus from '../Bus.js'
	import InformationItem from "../components/home/InformationItem";

	export default {
		name: "Information",
        components: {
            "Information-item": InformationItem
        }
	}
</script>

<style scoped>
	
</style>