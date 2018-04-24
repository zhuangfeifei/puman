<template>
	<div>
        <shops-item>预约商铺</shops-item>
	</div>
</template>

<script>
	import ShopsItem from "../components/extend/ShopsItem";

	export default {
		name: "shops",
        components: {
            "shops-item": ShopsItem
        }
	}
</script>

<style scoped>
	
</style>