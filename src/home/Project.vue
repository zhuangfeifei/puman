<template>
	<div>
        <project-item>项目介绍</project-item>
	</div>
</template>

<script>
	import ProjectItem from "../components/home/ProjectItem";

	export default {
		name: "project",
        components: {
            "project-item": ProjectItem
        }
	}
</script>

<style scoped>
	
</style>