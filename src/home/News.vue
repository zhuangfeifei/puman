<template>
	<div>
        <news-item>消息中心</news-item>
	</div>
</template>

<script>
	import NewsItem from "../components/home/NewsItem";

	export default {
		name: "news",
        components: {
            "news-item": NewsItem
        }
	}
</script>

<style scoped>
	
</style>