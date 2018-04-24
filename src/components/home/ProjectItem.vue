<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>项目介绍</span>
            </div>
        </nav>


        <div id="shangpu">
            <img src="http://www.homeamc.cn/puman/kaptcha/api/projectIntroduction">
        </div>
    </div>

</template>

<script>
	export default {
		name: "password-item",
        data(){
            return{
                
            }
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        methods: {
            history() {
                history.go(-1)
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0;
    background-color: white; 
    border-bottom: 1px solid gainsboro;
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

/*商铺*/
#shangpu{
    width: 100%;
    margin-top: 15vw;
    padding-top: 2vw;
    /*border:1px solid red;*/
}
#shangpu img{
    width: 100%;
}

a:focus{
    outline: none;
}

</style>