<template>
	<div>
        <loginpassword-item>修改密码</loginpassword-item>
	</div>
</template>

<script>
	import LoginpasswordItem from "../components/my/LoginpasswordItem";

	export default {
		name: "loginpassword",
        components: {
            "loginpassword-item": LoginpasswordItem
        }
	}
</script>

<style scoped>
	
</style>