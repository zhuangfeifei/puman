<template>
	<div>
        <upload-item>上传头像</upload-item>
	</div>
</template>

<script>
	import UploadItem from "../components/my/UploadItem";

	export default {
		name: "upload",
        components: {
            "upload-item": UploadItem
        }
	}
</script>

<style scoped>
	
</style>