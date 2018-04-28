<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>提现完成</span>
            </div>
        </nav>
        
        <div class="liu"></div>

        <div class="process">
            <div>
                <img src="../../assets/img/my/yuan.png" alt="">
                <section></section>
                <img src="../../assets/img/my/yuan.png" alt="">
                <section></section>
                <img src="../../assets/img/my/yuan.png" alt="">
            </div>
            <div>
                <p>提现申请成功</p>
                <p>正在审核中</p>
                <p>预计2~3工作日内可以到账</p>
            </div>
        </div>

        <div class="Remarks">
            <span>注：</span>
            <ol>
                <li>在审核中的提现无法再次发起提现</li>
                <li>银行转账一般需要1~2个工作日</li>
                <li>过程中如有问题，请直接联系对应业务人员</li>
            </ol>
        </div>

        <footer @click="his">
            回到首页
        </footer>

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
            his(){
                this.$router.push({path:'Home'})
            }
        }
	}
</script>

<style lang="less" scoped>
.yuyue{
    width: 100%; padding-top: 15vw;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw; letter-spacing: 0.5vw;
    position: fixed; top: 0; color: white;
    background-color: black;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa-angle-left{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw; color: white;
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}



.liu{
    width: 23vw; height: 23vw; margin: 10vw auto;
    background: url("../../assets/img/my/wx.png") no-repeat; background-size: 100% 100%;
}

.process{
    width: 100%; height: 30vw; display: flex; 
    // border: 1px solid red;
    div:nth-child(1){
        width: 4vw; height: 100%; text-align: right; margin-left: 20%; margin-right: 10vw; 
        display: flex; flex-direction:column; padding-top: 1.5vw;
        img{
            width: 4vw; height: 4vw; 
        }
        section{
            width: 1px; height: 6vw; border: 0.1px solid RGBA(206, 206, 206, 1); margin: 0 auto;
        }
    }
    div:nth-child(2){
        line-height: 7.5vw; font-family: PingFang-SC-Medium;
        font-size: 4vw; font-weight: 600; color: RGBA(26, 26, 26, 1);
    }
}
.Remarks{
    width: 90%; display: flex; margin: 10vw auto; font-size: 3.8vw;
    color: RGBA(43, 43, 43, 1); line-height: 7vw;
}

footer{
    width: 100%; height: 15vw; line-height: 15vw; text-align: center; color: RGBA(255, 139, 75, 1);
    border-top: 1px solid RGBA(255, 139, 75, 1); background:rgba(255,255,255,1); font-size: 4.7vw; font-weight: Bold;
    box-shadow:0px 0px 10px rgba(43,43,43,0.1); position: fixed; bottom: 0; left: 0; 
}


a:focus{
    outline: none;
}
</style>