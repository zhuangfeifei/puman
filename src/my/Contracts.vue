<template>
	<div id="hetong">
        <contracts-item>合同详情</contracts-item>

		

	</div>
</template>

<script>
	import ContractsItem from "../components/my/ContractsItem";

	export default {
		name: "contracts",
        components: {
            "contracts-item": ContractsItem
        }
	}
</script>

<style scoped>
#hetong{
	width: 100%; 
}
	
</style>