<template>
	<div>
        <firstresults-item>首轮结果</firstresults-item>
	</div>
</template>

<script>
	import FirstresultsItem from "../components/extend/FirstresultsItem";

	export default {
		name: "firstresults",
        components: {
            "firstresults-item": FirstresultsItem
        },
		
	}
</script>

<style scoped>
	
</style>