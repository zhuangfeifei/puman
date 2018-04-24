<template>
	<div>
        <verification-item>验证手机号</verification-item>
	</div>
</template>

<script>
	import VerificationItem from "../components/extend/VerificationItem";

	export default {
		name: "verification",
        components: {
            "verification-item": VerificationItem
        }
	}
</script>

<style scoped>
	
</style>