<template>
	<div>
        <reminder-item>温馨提示</reminder-item>
	</div>
</template>

<script>
	import ReminderItem from "../components/extend/ReminderItem";

	export default {
		name: "reminder",
        components: {
            "reminder-item": ReminderItem
        }
	}
</script>

<style scoped>
	
</style>