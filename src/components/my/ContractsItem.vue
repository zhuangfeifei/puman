<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>合同详情</span>
                <!--<i class="fas" @click="tijiao">√</i>-->
            </div>
        </nav>


        <div class="lishi">
            <div @click="jichu">基础信息</div><div @click="shenhe">审核历史</div>
        </div>

        <div v-show="isIf" id="myCanvas" class="hetong">
            <html>
                <head>
                    <title>合同</title>
                </head>
                <body style = "font-family: SimSun;">
            <strong>委托经营管理合同</strong>
            <div class="jia">
                <div class="jia1"><span>甲方：</span><span>{{bugername}}</span></div>
                <div class="jia1"><span>身份证号：</span><span>{{identnumber}}</span></div>
                <div class="jia1"><span>联系电话：</span><span>{{phone}}</span></div>
            </div>
            <div class="yi">
                <div class="jia1"><span>乙方：</span><span>苏州厚木资产管理有限公司</span></div>
                <div class="jia1"><span>营业执照号码：</span><span>91320000MAIM90CB41</span></div>
                <div class="jia1"><span>法定代表人：</span><span>程谦</span></div>
                <div class="jia1 zhu"><span>住所：</span><span class="suo">苏州市相城区元和街道华元路818号101室</span></div>
                <div class="jia1"><span>联系电话：</span><span>0512-66836665</span></div>
            </div>
            <div class="falv">
    <p>根据《中华人民共和国合同法》及有关法律、法规之规定，甲、乙双方在平等、自愿和协商—致的基础上，特就甲方委托乙方管理经营甲方自有物业之事宜订立本合同，以资共同信守。</p>
    <p>第一条 物业概况</p>
    <p> 1.1委托经营管理物业位于江苏省苏州市相城区“<span class="guan">{{proname}}</span>”项目<span class="guan">{{guan1}}</span>馆地上<span class="guan">{{guan2}}</span>层<span class="guan">{{guan3}}</span>＿号单元（以下简称该物业）。</p>
    
    <p> 1.2甲方交付乙方的物业应符合政府部门规定的有关要求，并适合用于本合同所约定的经营用途。</p>
    
    <p> 第二条 委托内容</p>
    <p> 2.1甲方将本合同所述之物业委托乙方经营管理。委托经营管理期间，甲方授权乙方以自己的名义从事该物业经营管理所涉的一切活动，包括但不限于以乙方名义将该物业出租予第三方、代甲方向税务局申请开具发票、代为缴纳相应税费，且乙方有权将甲方委托的全部或部分事项转委托予第三方。</p>
    
    <p> 2.2乙方可根据市场需求，自行确定和调整该物业的经营布局、装修、改造、布置等正常营业所需之全部事宜，无须另行征得甲方同意，发生的费用由乙方承担。</p>
    
    <p> 2.3乙方可独立全权独立处理一切与该物业经营管理有关的一切内外事务。</p>
    
    <p> 第三条 委托经营管理期限</p>
    <p> 3.1该物业委托管理期限约20年，即自2016年1月1日起计算。</p>
    
    <p> 3.2委托管理期满，如无书面提出解除合同，甲方应继续委托乙方经营管理。</p>
    
    <p> 第四条 双方收益约定</p>
    <p> 4.1乙方收取该项目所属区域的实际总租金的10%作为管理费，乙方在扣除该项管理费后，应甲方申请，将按甲方在该项目所占物业份额比例（物业份额比例=该物业建筑面积÷该项目统一经营区域建筑面积×位置系数），分配甲方应得的税前收益；其中，自2017年1月1日起，若乙方连续2年税前年收益低于市场平均价值，视为乙方管理不利，甲方有权要求解除合同。</p>
    
    <p> 4.2甲方授权乙方代办税务发票（租金税费由甲方承担并由乙方代扣代缴，乙方可在支付甲方应得收益时直接扣除对应租金税费）。</p>
    
    <p> 4.3甲方如需变更账户需提前书面通知乙方，否则引起乙方无法支付收益或支付错误的后果由甲方承担。</p>
    
    <p> 4.4 根据国家法律、法规规定甲方收取的收入及其他需要缴纳相关税费的均由甲方自行承担。</p>
    <p> 4.5 支付方式：由甲方注册成为“扑满APP”的会员，根据系统提示的流程成为商铺权益人之后，在系统中申请租金提现，乙方客服人员将于7日内处理甲方申请事项。</p>
    
    <p> 第五条 双方权利与义务</p>
    <p> 5.1甲方的权利与义务</p>
    
    <p> 5.1.1甲方保证其为该物业的合法权属人。</p>
    
    <p> 5.1.2甲方委托乙方经营管理该物业的行为是不可变更和撤销的，甲方明示放弃将该物业自行出借和自用的权利。</p>
    
    <p> 5.1.3委托经营管理期间，在买受人继续履行本协议甲方权利义务和不影响乙方正常经营管理活动的前提下，甲方有权将该物业另行转让，但必须提前三个月书面通知乙方，乙方及实际承租人在同等条件下享有优先受让的权利。该物业在办理产权变更登记手续时，甲方应及时与乙方办理委托经营管理合同的变更手续，将相关权利义务关系转移至受让方名下，否则，由此引起的一切不利后果及损失均由甲方承担。</p>
    
    <p> 5.1.4甲方应按乙方的需要（若有）尽力配合乙方办理因经营所需的一切手续和文件，为乙方提供一切正常管理或经营活动所必须的条件。</p>
    
    <p> 5.1.5委托经营管理期间，甲方必须尊重乙方对该物业的自主使用权，不得向乙方主张该物业的占有权、使用权和收益权（本合同已约定的收益除外），不得干涉乙方经营该物业及整个项目的权利。</p>
    
    <p> 5.1.6甲方有权按本合同约定要求乙方按时支付甲方应得收益的权利。</p>
    
    <p> 5.2乙方的权利和义务</p>
    
    <p> 5.2.1乙方有权按约取得本合同约定的管理费。</p>
    
    <p> 5.2.2乙方日常管理和经营必须接受工商、公安、消防、环保、卫生、税务等部门的管理与监督，不得从事非法活动。</p>
    
    <p>> 5.2.3乙方有权自主经营管理该物业，有权因经营需要对物业和整个项目进行重新布局和装修，有权代表甲方将该物业以自己的名义或租赁管理或合作经营等多种渠道（包括但不限于自用、转租等）经营管理该物业及整个项目市场，甲方对此表示认可，前述事务操作时无需再另征得甲方同意。</p>
    
    <p> 5.2.4委托经营管理期间，甲方应付的物业管理、水、电（含公摊部分）及通讯等费用均由乙方或实际占用人承担。</p>
    
    <p> 5.2.5乙方应按照法律规定交纳在经营管理过程中的相关税费。</p>
    
    <p> 第六条 物业的交付和返还</p>
    <p> 6.1、甲方应于收到出卖人发出的交房通知书之日起的5个工作日内接收该房产并同时将该房产交付给乙方。</p>
    
    <p> 6.2、乙方应在委托经营管理期届满前十日内以书面形式通知甲方办理物业移交手续。该物业返还甲方时，双方应指定人员共同参与交还该物业的验收工作，如甲方未按期指定人员参与验收或其指定人员未按期参与验收，则视为验收通过。该物业移交时，双方按该物业交付现状移交，并填写《物业移交清单》。委托经营管理期间，该物业及其设施、设备的正常使用及自然损耗乙方无须承担责任；乙方及实际经营者应于委托经营管理期届满前将该物业内的物品清空，否则租赁期届满后，该物业内留有的物件均视为赠与甲方，甲方有权对其处置。验收过程中发现问题的，甲方应当场提出，如当场难以检测判断的，应于发现该问题之日起十日内向书面乙方提出。甲方未及时提出异议的，视为双方验收通过。</p>
    
    <p> 第七条 违约责任</p>
    <p> 7.1甲方违约责任</p>
    
    <p> 7.1.1甲方延迟交付该房产超过10个工作日或干扰、阻挠乙方正常管理经营的，应支付违约金一万元，如违约金不足以弥补损失的，应进行全额赔偿。</p>
    
    <p> 7.1.2甲方擅自提前终止或解除本合同，提前收回该物业、危及乙方统一经营管理的，应支付违约金五万元，如违约金不足以弥补损失的，应进行全额赔偿。</p>
    
    <p> 7.1.3甲方不配合或无故拒绝协助乙方经营管理所需申办的登记审批手续，以致延误乙方正常开业的，应按延误的天数，支付乙方每日人民币伍仟元的违约金，违约金不足弥补乙方损失的，甲方还应进行全额赔偿，同时乙方承租期限相应顺延。</p>
    
    <p> 7.2乙方违约责任</p>
    
    <p> 7.2.1乙方未能按约向甲方支付甲方应得收益的，则每逾期一日，乙方应按欠付款项金额的万分之三向甲方支付违约金。</p>
    
    <p> 7.2.2乙方擅自提前终止或解除本合同，支付甲方违约金五万元。</p>
    
    <p> 第八条 免责条款</p>
    <p> 8.1不可抗力是指不能预见、无法避免、并不能克服的自然事件及政治事件。不可抗力及其他意外事故造成甲方或乙方损失的，经有关机关确认，双方互相免除责任，在不可抗力事件发生后，不能继续履行合同的一方应立即将不可抗力的情况通知对方，并在30日内提出不能履行合同的理由的有效证明文件（因政府部门导致出证推迟不在此限）。此项证明文件应由发送灾害地区的公证机构出具。按照灾害对履行合同的影响程度，由双方协商决定是否变更或解除合同。委托经营管理期间，该物业如因不可抗力导致或下列情形特殊原因的，本合同提前终止，双方互不承担责任：</p>
    
    <p> 8.1.1该物业占用范围内的土地使用权依法提前收回；</p>
    
    <p> 8.1.2该物业因社会公共利益被依法征用的；</p>
    
    <p> 8.1.3该物业因城市建设需要被依法列入拆迁许可范围内；</p>
    
    <p> 8.1.4该物业毁损、灭失或者被鉴定为危险房屋的。</p>

    <p> 第九条 维修责任</p>
    <p> 9.1因不可抗力致使房产、设施损坏或不可正常使用，或不可归责于乙方原因而致使房产损坏或不可正常使用的，其修缮、更换的责任由甲方负责使其恢复正常使用的功能。</p>
    
    <p> 9.2乙方开业后，由于租赁场地非因乙方原因需要维修的，由甲方负责无偿维修；若造成乙方损失的，甲方应予赔偿。如因乙方原因造成甲方租赁场地结构损坏的，乙方必须负责维修并赔偿。需要动用维修基金予以维修的，甲方授权乙方办理动用维修基金的手续，若有需要甲方配合之处，甲方应予以配合。</p>
    
    <p> 9.3如因不可抗力或甲方原因，导致该物业任何部分被损坏之后10日内甲方不进行重建复原工程，乙方可先进行必须的重建复原工程，代垫相关费，甲方应及时补偿乙方由此引起的所有费用及开支，或由乙方在应付甲方款项中予以扣除。</p>
    
    <p> 9.4对于乙方装修、添加的物品的被损坏，维修义务由乙方自行承担。</p>
    
    
    <p> 第十条 其他约定</p>
    <p> 10.1为保证项目整体经营的稳定性和连续性，本合同期内，该物业须由乙方进行统一规划和经营管理，甲方不得以任何形式独立经营或干扰统一经营，未经双方协商一致任何一方都不得擅自变更或解除本合同。</p>
    
    <p> 10.2在委托经营管理期间，甲乙双方应针对各自所属财产的办理相关保险。</p>
    
    <p> 10.3在委托经营管理期间，甲乙双方应各自承担各自应付的税费，因国家税费政策变化导致甲方持有房产税费增加的，由甲方自行承担，与乙方无关。</p>
    
    <p> 10.4执行本合同事项需通知对方的，可以书面形式、系统公告进行，通知应以中文书写，可以通过传真、电报、函件、公告或面交方式送达本合同落款所列明的双方地址。如上述地址因变更而无法送达的后果责任由变更方当事人自负。</p>
    
    <p> 第十一条 争议解决</p>
    <p> 11.1合同发生争议，由双方协商解决；协商不成时，任何一方均可向该物业所在地有管辖权的人民法院提起诉讼。</p>
    
    <p> 11.2不可抗力为当事人无法预见、无法避免、无法控制、无法克服的意外事件（如战争、车祸等）或自然灾害（如地震、火灾、水灾等）。</p>
    
    <p> 第十二条 附则</p>
    <p> 12.1本合同未尽事宜，经双方协商一致，可订立补充条款，该补充条款作为对本合同的修正；</p>
    
    <p> 12.2甲、乙双方在签署本合同时，对各自权利、义务及特别约定责任条款内容已充分阅读和理解，并自愿按合同规定严格执行，不得反悔；</p>
    
    <p> 12.3本合同经双方当事人签字或盖章后生效；</p>
    
    <p> 12.4本合同壹式贰份，双方各执壹份，具有同等法律效力。</p>
    
            
            <div class="imgs">
                <span>甲方签名：</span>
                <div id="signature">
                    <img :src="img">
                </div>
                <span class="zhang1">乙方盖章：</span>
                <div class="zhang">
                    <img src="../../assets/img/qianming/zhang.jpg" alt="乙方盖章">
                </div>
            </div>
            
            </div>
            <footer>
            </footer>
        </body>
    </html>
        </div>
        

        <!--****************************************************************-->


        <div v-show="isIf1" class="shenheliu" v-for="(item,index) in data" :key="index">

            <div class="liu">
                <div class="yuan"><div class="yuan3"></div></div>
                <div></div>
                <div class="yuan" :class="{yuan2:item.status == 0}"><div :class="{yuan1:item.status == 0}" class="yuan3"></div></div>
                <div v-show="item.status == 1"></div>
                <div class="yuan" v-show="item.status == 1"><div class="yuan3"></div></div>
            </div>
            <div class="shenhe">
                <div>签约<br><span>{{item.sendtime.substring(0,10)}}</span></div>
                <div class="yijian">
                    <div v-show="item.status == 0">
                        待审核
                    </div>
                    <div v-show="item.status == 1">
                        审核通过<br><span>审核人：{{item.name}}</span><br><span>{{item.auditime.substring(0,10)}}</span>
                    </div>
                    <div v-show="item.status == -1" class="yijian1">
                        审核未通过<br><span>审核人：{{item.name}}</span><br><span>{{item.auditime.substring(0,10)}}</span>
                    </div>
                    <div v-if="item.status == 1" class="yijian2">
                        审核意见：{{item.reason}}。请重新签约。
                    </div>
                </div>
                <div v-show="item.status == 1">成功<br><span>{{item.auditime.substring(0,10)}}</span></div>
                <div v-show="item.status == -1">失败<br><span>{{item.auditime.substring(0,10)}}</span></div>
            </div>
        </div>
        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
	export default {
		name: "contracts-item",
        data(){
            return{
                guan:'',guan1:'',guan2:'',guan3:'',proname:'',phone:'',identnumber:'',bugername:'',img:'',
                isIf:true,isIf1:false,data:''
            }
        },
        created(){
            var phone, identnumber , bugername, token
            function get(phone1,identnumber1,bugername1,token1) {
                var v = window.document.cookie.match('(^|;) ?' + phone1 + '=([^;]*)(;|$)');
                v = true ? v[2] :null
                phone = v
                var v1 = window.document.cookie.match('(^|;) ?' + identnumber1 + '=([^;]*)(;|$)');
                v1 = true ? v1[2] :null
                identnumber = v1
                var v2 = window.document.cookie.match('(^|;) ?' + bugername1 + '=([^;]*)(;|$)');
                v2 = true ? v2[2] :null
                bugername = v2
                var v3 = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                v3 = true ? v3[2] :null
                token = v3
            }
            get('phone','identnumber','bugername','token')
            // console.log(guan,decodeURI(decodeURI(proname)),shopsid)
            var guan = this.$route.query.guan
            this.proname = this.$route.query.proname
            this.img = httpUrl.imgUrl + this.$route.query.img
            // console.log(this.img+'----')
            this.guan1 = guan.substring(0,1)
            this.guan2 = guan.substring(1,2)
            this.guan3 = guan.substring(1,5)
            this.phone = phone
            this.identnumber = identnumber
            this.bugername = decodeURI(decodeURI(bugername))
            var shopsid = this.$route.query.shopsid
            this.$http.post(httpUrl.dev + '/puman/api/delegatcontract/auditHistory',{ token,shopsid },{ emulateJSON: true })
            .then(response => {
                // console.log(response.body)
                if(response.body.info.length > 0){
                    this.data = response.body.info
                }
            },response => {

            })
        },
        methods: {
            history() {
                history.go(-1)
            },
            jichu(){
                $('.lishi>div:nth-child(1)').css({'color':'white','background-color':'#3e74d8'})
                $('.lishi>div:nth-child(2)').css({'color':'#3e74d8','background-color':'white'})
                this.isIf = true
                this.isIf1 = false
            },
            shenhe(){
                $('.lishi>div:nth-child(1)').css({'color':'#3e74d8','background-color':'white'})
                $('.lishi>div:nth-child(2)').css({'color':'white','background-color':'#3e74d8'})
                this.isIf = false
                this.isIf1 = true
            }
        }
	}
</script>

<style scoped>
@import "../../assets/vux.css";
.yuyue{
    width: 100%;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
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
.fas{
    float: right; font-size: 5vw; margin-right: 5vw;
}
#nav .header span{
    margin-left: -3vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}




.lishi{
    width: 50%; height: 10vw; font-size: 4.5vw; line-height: 10vw; 
    margin-top: 20vw; margin-left: 25%; color: #3e74d8; 
}
.lishi>div{
    width: 50%; float: left; text-align: center;
}
.lishi>div:nth-child(1){
    background-color: #3e74d8; color: white; border: 1px solid #3e74d8; border-radius: 2vw 0 0 2vw;
}
.lishi>div:nth-child(2){
    border: 1px solid #3e74d8; border-radius: 0 2vw 2vw 0;
}


/*合同*/
.hetong{
    width: 100%; margin-top: 5vw; font-size: 4vw; margin-bottom: 20vw; padding: 3vw;
}
strong{
    text-align: center; font-size: 5vw;
    margin-left: 30%;
}
.jia{
    width: 100%; height: 20vw; font-size: 4vw;
    /*border:1px solid red;*/
     margin-top: 3vw;
}
.yi{
    width: 100%; height: 40vw; font-size: 4vw;
    border-bottom:1vw solid gainsboro;
    margin-top: 3vw;
}
.jia1{
    width: 90%; height: 5vw; margin-top: 1vw;
    /*border:1px solid red; */
    margin-left: 3vw;
}
.jia1>span:nth-child(1){
    display: block; width: 40%;
    float: left;
}
.jia1>span:nth-child(2){
    float: left;
}
.zhu{
    height: 11vw;
}
.suo{
    width: 60%;
}
.guan{
    color: blue; font-weight: 600;
}
.falv{
    width: 100%;
    margin: 3vw auto; font-size: 3.5vw;
}
a:focus{
    outline: none;
}

.qianming {
    width: 100%; height: 20vw;
    position: fixed; bottom: 0vw;
    display: flex;
    justify-content: space-around;
    background-color: white;
}


.di{
    position: fixed; bottom: 0; width: 100%; height: 20vw;background-color: white;
}
.tijiao{
    width: 90%; margin: 5vw 5%; 
}


.js-signature{
    width: 100%; height: 130vw;
}
.imgs{
    width: 100%; height: 100vw; margin-top: 2vw; position: relative;
}
.zhang1{
    position: absolute;top: 60vw;       
}
#signature{
    transform: rotate(-90deg); margin-left: 24vw; margin-top: -12vw;
    width: 47vw; height: 80vw;
}
#signature img{
    width: 47vw; height: 80vw;
}
.zhang{
    width: 40%; height: 40vw; margin: -8vw auto;
}
.zhang img{
    width: 90%; height: 90%; margin: 5%;
}



/*--------------------------------------------------------*/

.shenheliu{
    width: 100; margin-top: 10vw;
}
.liu{
    width: 10vw; margin-left: 5vw; float: left;
    /*border: 1px solid red;*/
}
.liu>div:nth-child(2n){
    width: 1vw; height: 25vw; margin-left: 3.5vw; background-color: #a3bdec;   
}
.yuan{
    width: 8vw; height: 8vw; border-radius: 50%; margin-left: 0vw; background-color: #a3bdec;
    padding-top: 1.25vw;
}
.yuan3{
    width: 5.5vw; height: 5.5vw; border-radius: 50%; margin-left: 1.3vw;
    background-color: #3e74d8;
}
.yuan1{
    background-color: gray;
}
.yuan2{
    background-color: gainsboro;
}

.shenhe{
    float: left; width: 80%; font-size: 5vw; padding-top: 0.5vw;
    /*border: 1px solid red;*/
}
.shenhe>div{
    width: 100%; height: 33vw; font-size: 5vw;
    /*border: 1px solid red;*/
}
.shenhe>div:nth-child(3){
    width: 100%; height: 20vw;
}
.shenhe span{
    font-size: 4vw; color: gray;
}
.yijian{
    /*border: 1px solid red;*/
    display: flex
}
.yijian1{
    float: left; width: 100%;
}
.yijian2{
    float: left; width: 50vw; font-size: 4vw; color: gray; padding-top: 2vw; background-color: #ebf1fb;
     word-wrap: break-word; overflow-x: auto; margin-left: 2vw;
}





</style>