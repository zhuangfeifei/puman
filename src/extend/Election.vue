<template>
	<div>
        <election-item>选举</election-item>
	</div>
</template>

<script>
	import ElectionItem from "../components/extend/ElectionItem";

	export default {
		name: "election",
        components: {
            "election-item": ElectionItem
        },
		
	}
</script>

<style scoped>
	div{
		width: 100%;
	}
</style>