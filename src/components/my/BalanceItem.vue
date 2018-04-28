<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span v-if="showList == 0">提现中</span>
                <span v-else>已提现</span>
            </div>
        </nav>
        
        <div v-show="showList == 0" class="lists" v-for="(item,index) in Data" :key="index">
            <div>
                <img src="../../assets/img/my/tixian.png" alt="">
                <div><span>最近提现中金额</span><span>{{item.drawDate}}</span></div>
                <p>¥{{item.drawCash}}</p>
                <div><span>{{item.bankName}}</span><span>{{item.bankNo | banknos}}</span></div>
            </div>
        </div>


        <div v-show="showList == 1" class="listss" v-for="(item,index) in Data" :key="index">
            <p>{{item.drawDate}}</p>
            <div>
                <img v-if="item.status === '不通过'" src="../../assets/img/my/weitong.png" alt="">
                <img v-else src="../../assets/img/my/yiti.png" alt="">
                <p>¥{{item.drawCash}}</p>
                <div><span>{{item.bankName}}</span><span>{{item.bankNo | banknos}}</span></div>
            </div>
        </div>

        <div v-if="show" class="wu">暂无提现记录！</div>
        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton} from 'vux'
import placeholder from "../../assets/placeholder.gif"

	export default {
		name: "loginpassword-item",
        data(){
            return{
                placeholder,Data:'',show:false,showList:''
            }
        },
        created(){
            var token,userId
            function get(token1,userId1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                v = true ? v[2] :null
                token = v
                var v1 = window.document.cookie.match('(^|;) ?' + userId1 + '=([^;]*)(;|$)');
                v1 = true ? v1[2] :null
                userId = v1
            }
            get('token','userId')
            // console.log(token,userId)
            this.showList = this.$route.query.num
            var shopsid = this.$route.query.shopsid
            this.$http.post(httpUrl.dev + '/puman/api/rent/draw', { token, userId, type:this.showList }, { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if (response.body.code == 200) {
                        this.Data = response.body.list
                        if(response.body.list.length == 0){
                            this.show = true
                        }
                    }
                }, response => {
                    this.$vux.loading.show({
                        text: '服务器异常',
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    },3000)
                })
        },
        methods: {
            history() {
                history.go(-1)
            }
        },
        filters:{
            banknos(val){
                return val.substring(0,4)+'*******'+val.substring(val.length-4,val.length)
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
    width: 100%; height: 15vw;
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
    line-height: 15vw; color: white
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}



.lists{
    width: 100%; font-size: 4vw; color:rgba(43,43,43,1); margin-top: 5vw;
    // border-bottom: 1px solid black;
    img{
        width: 18vw; height: 9vw; position: relative; left: -3vw;
    }
    p{
        color: RGBA(43, 43, 43, 1); font-weight: Regular; text-align: center; margin-top: 3vw;
    }
}
.lists>div{
    width: 80%; height: 43vw; margin: 0 auto; padding-top: 3vw;
    // border: 1px solid black;
    background:rgba(255,255,255,1); border-radius: 8px; box-shadow:0px 0px 10px rgba(43,43,43,0.1);
    div:nth-child(2){
        width: 100%; height: 5vw; display: flex; justify-content: space-between; padding: 0 3vw; color:rgba(128,128,128,1);
    }
    p{
         font-weight: Bold; font-size: 7vw;
    }
    div:nth-child(4){
        width: 100%; height: 5vw; display: flex; justify-content: space-around; padding: 0 3vw; color:rgba(75,75,75,1); 
        font-size: 4.3vw;
    }
}


.listss{
    width: 100%; font-size: 4vw; color:rgba(43,43,43,1);
    // border-bottom: 1px solid black;
    img{
        width: 18vw; height: 9vw; position: relative; left: -3vw;
    }
    p{
        color: RGBA(43, 43, 43, 1); font-weight: Regular; text-align: center; margin-top: 3vw;
    }
}
.listss>div{
    width: 80%; height: 35vw; margin: 0 auto; padding-top: 3vw;
    // border: 1px solid black;
    background:rgba(255,255,255,1); border-radius: 8px; box-shadow:0px 0px 10px rgba(43,43,43,0.1);
    p{
         font-weight: Bold; font-size: 7vw; margin-top: -2vw;
    }
    div:nth-child(3){
        width: 100%; height: 5vw; display: flex; justify-content: space-around; padding: 0 5vw; color:rgba(75,75,75,1); 
        font-size: 4.3vw; 
    }
}


.wu{
    width: 100%; text-align: center; color: gray; font-size: 4vw; margin-top: 50vw;
}




a{
    color: black;
}
a:hover{
    color: black; text-decoration: none;
}
a:focus{
    outline: none;
}
</style>