<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>提现完成</span><span @click="wanchen" class="wanchen">完成</span>
            </div>
        </nav>
        
        <div class="liu">
            
        </div>
        <p>提现中，预计1~3个工作日到账
            <br>请耐心等待审核！</p>
    </div>

</template>

<script>
	export default {
        data(){
            return{
                Data:''
            }
        },
        created(){
            
        },
        methods: {
            history() {
                history.go(-1)
            },
            wanchen(){
                this.$router.push({name:'shoppingmall'})
            },
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 15vw;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw; letter-spacing: 0.5vw;
    position: fixed; top: 0;
    background-color: white;
    border-bottom: 0.3vw solid gainsboro;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa-angle-left{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw; color: black
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}
.wanchen{
    float: right; position: relative; right: 5vw; color: blue;
}


.liu{
    width: 30vw; height: 30vw; margin: 10vw auto;
    background: url("../../assets/img/1_我的/yes@2x.png") no-repeat; background-size: 100% 100%;
}
p{
    display: inline-block; width: 80vw; font-size: 4.5vw; text-align: center; margin-left: 10vw;
}

a:focus{
    outline: none;
}
</style>