<template>
	<div>
        <withdrawals-item>提现</withdrawals-item>
	</div>
</template>

<script>
	import WithdrawalsItem from "../components/my/WithdrawalsItem";

	export default {
		name: "withdrawals",
        components: {
            "withdrawals-item": WithdrawalsItem
        }
	}
</script>

<style scoped>
	
</style>