<template>
	<div>
        <mycontract-item>签约</mycontract-item>
		
	</div>
</template>

<script>
	import MycontractItem from "../components/my/MycontractItem";

	export default {
		name: "mycontract",
        components: {
            "mycontract-item": MycontractItem
        }
	}
</script>

<style scoped>
	
</style>