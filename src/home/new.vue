<template>
	<div id="apps">
        <div class="notice" v-for="(item,index) in 1" :key="index">
            <div class="tittle">
                <span>3.8女神节，忘掉家居琐事，每天都是8女神节，忘掉家居琐事，每天都是</span>
                <span>03-08</span>
            </div>
            <div class="content">
                一个『路径参数』使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		computed:{
            checked(){
                return this.$store.state.bianji
            }
        },
        created(){
            // console.log(this.checked)
        }
	}
</script>

<style lang="less" scoped>
#apps{
    width: 100%; 
}
.notice{
    width: 100%; height: 15vh; padding: 1.5vh 1vh 0 1.5vh;
    border-bottom: 1px solid gainsboro; 
    .hangshu{
        display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;
    }
    .tittle{
        width: 100%; height: 4vh; font-size: 4.5vw; font-weight: 600; margin: 0; display: flex; 
        justify-content: space-between; line-height: 4vh;
        span:nth-child(1){
            display: inline-block; width: 80%; .hangshu; -webkit-line-clamp: 1;
        }
        span:nth-child(2){
            margin-right: 2vw; color: gray; font-size: 3.8vw;
        }
    }
    .content{
        width: 100%; height: 7vh; color: gray; .hangshu; -webkit-line-clamp: 2; font-size: 4vw;
        position: relative; top: 1vw; line-height: 3.5vh;
    }
}
</style>