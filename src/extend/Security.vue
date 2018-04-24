<template>
	<div>
        <security-item>防伪编号</security-item>
	</div>
</template>

<script>
	import SecurityItem from "../components/extend/SecurityItem";

	export default {
		name: "security",
        components: {
            "security-item": SecurityItem
        }
	}
</script>

<style scoped>
	
</style>