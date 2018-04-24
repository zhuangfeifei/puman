<template>
	<div>
        <binding-item>绑定银行卡</binding-item>
	</div>
</template>

<script>
	import BindingItem from "../components/extend/BindingItem";

	export default {
		name: "binding",
        components: {
            "binding-item": BindingItem
        }
	}
</script>

<style scoped>
	
</style>