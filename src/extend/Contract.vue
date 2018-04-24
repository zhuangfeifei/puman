<template>
	<div id="hetong">
        <contract-item>合同详情</contract-item>

		

	</div>
</template>

<script>
	import ContractItem from "../components/extend/ContractItem";

	export default {
		name: "contract",
        components: {
            "contract-item": ContractItem
        }
	}
</script>

<style scoped>
#hetong{
	width: 100%; 
}
	
</style>