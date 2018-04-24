<template>
	<div>
        <secondresult-item>第二轮结果</secondresult-item>
	</div>
</template>

<script>
	import SecondresultItem from "../components/extend/SecondresultItem";

	export default {
		name: "firstresults",
        components: {
            "secondresult-item": SecondresultItem
        },
		
	}
</script>

<style scoped>
	
</style>