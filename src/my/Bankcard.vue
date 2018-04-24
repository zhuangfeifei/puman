<template>
	<div>
        <bankcard-item>我的银行卡</bankcard-item>
	</div>
</template>

<script>
	import BankcardItem from "../components/my/BankcardItem";

	export default {
		name: "bankcard",
        components: {
            "bankcard-item": BankcardItem
        }
	}
</script>

<style scoped>
	
</style>