<template>
	<div>
        <appointment-item>预约</appointment-item>
	</div>
</template>

<script>
	import AppointmentItem from "../components/extend/AppointmentItem";

	export default {
		name: "appointment",
        components: {
            "appointment-item": AppointmentItem
        }
	}
</script>

<style scoped>
	
</style>