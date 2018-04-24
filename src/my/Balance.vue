<template>
	<div>
        <balance-item>余额</balance-item>
	</div>
</template>

<script>
	import BalanceItem from "../components/my/BalanceItem";

	export default {
		name: "balance",
        components: {
            "balance-item": BalanceItem
        }
	}
</script>

<style scoped>
	
</style>