import Vue from 'vue'
import Router from 'vue-router'


// 登录页面
import Login from '../login/Login'
// 注册页面
import Register from "../login/Register"
//忘记密码页面
import Password from "../login/Password"


// 首页页面
import Home from '../home/Home'
// 项目介绍
import Project from '../home/Project'
// 新闻资讯
import Information from '../home/Information'
// 搜索
import Search from '../home/Search'
// 消息中心
import News from '../home/News'
// 消息中心
import notice from '../home/notice'
// 消息中心
import New from '../home/new'
// 知识库
import knowledge from '../home/knowledge'
import knowledgeBase from '../home/knowledgeBase'
// 扫描
import Scanning from '../home/Scanning'


// 扩展
// 预约
import Appointment from '../extend/Appointment'
// 商铺
import Shops from '../extend/Shops'
// 签约
import Sign from '../extend/Sign'
// 温馨提示
import Reminder from '../extend/Reminder'
// 合同详情
import Contract from '../extend/Contract'
// 合同详情
import Contracts from '../my/Contracts'
// 签名
import Autograph from '../extend/Autograph'
// 选举
import Election from '../extend/Election'
// 首轮
import Firstround from '../extend/Firstround'
// 第二轮轮
import Secondround from '../extend/Secondround'
// 最终
import Final from '../extend/Final'
// 首轮接货
import Firstresults from '../extend/Firstresults'
// 权益人
import Equityholder from '../extend/Equityholder'
// 防伪编号
import Security from '../extend/Security'
// 绑定银行卡
import Binding from '../extend/Binding'
// 验证手机号
import Verification from '../extend/Verification'
// 成为权益人
import Become from '../extend/Become'
// 身份验证
import Authentication from '../extend/Authentication'
import AuthenticationName from '../extend/AuthenticationName'
// 第二轮结果
import Secondresult from '../extend/Secondresult'


// 商城
import Shoppingmall from '../Shoppingmall/Shoppingmall'
// import Shoppingmalls from '../Shoppingmall/Shoppingmalls'
// 餐厅简介
import Restaurant from '../Shoppingmall/Restaurant'


// 我的
import My from '../my/My'
// 个人信息
import Personal from '../my/Personal'
// 我的地址
import Address from '../my/Address'
// 新增地址
import Newaddress from '../my/Newaddress'
// 地图
import Maps from '../my/Maps'
// 产权管理
import Administration from '../my/Administration'
// 管理商铺
import Management from '../my/Management'
// 收益
import Profit from '../my/Profit'
// 我的签约
import Mycontract from '../my/Mycontract'
// 我的预约
import Myreservation from '../my/Myreservation'
// 系统设置
import Systemsettings from '../my/Systemsettings'
// 修改密码
import Loginpassword from '../my/Loginpassword'
// 我的钱包
import Wallet from '../my/Wallet'
// 余额
import Balance from '../my/Balance'
// 提现
import Withdrawals from '../my/Withdrawals'
// 支付完成
import Zhifuwc from '../components/my/Zhifuwc'
// 充值
import Recharge from '../my/Recharge'
// 我的银行卡
import Bankcard from '../my/Bankcard'
// 上传头像
import Upload from '../my/Upload'
// 修改支付密码
import Paymentpassword from '../my/Paymentpassword'
// 权益人
import Equityholder1 from '../my/Equityholder1'
// 帮助
import Help from '../my/Help'
// 收益明细
import Detailed from '../my/Detailed'
// 银行卡信息
import Bankinformation from '../my/Bankinformation'


// 发现
import Find from '../find/Find'

import Pai from '../extend/Pai'

Vue.use(Router)

export default new Router({
  routes: [
    {  //登录的路由
      path: '/',
      name: 'login',
      component: Login
    },
    { //主页的路由
      path: '/home',
      name: 'home',
      component: Home,
        // children:[
        //   {path:'my', component: My}
        // ]
    },
    // { //分类房间的路由
    //   path: '/categoryroom/:categoryid/:gamename',
    //   name: 'CategoryRoom',
    //   component: CategoryRoom
    // },
    { // 注册的路由
        name: "register",
        path: '/register',
        component: Register
      },
      { //忘记密码的路由
        name: "password",
        path: '/password',
        component: Password
      },
      { //预约的路由
        name: "appointment",
        path: '/appointment',
        component: Appointment
      },
      { //商铺的路由
        name: "shops",
        path: '/shops',
        component: Shops
      },
      { //签约的路由
        name: "sign",
        path: '/sign',
        component: Sign
      } ,
      { //温馨提示的路由
        name: "reminder",
        path: '/reminder',
        component: Reminder
      },
      { //合同详情的路由
        name: "contract",
        path: '/contract',
        component: Contract
      },,
      { //合同详情的路由
        name: "contracts",
        path: '/contracts',
        component: Contracts
      },
      { //我的的路由
        name: "my",
        path: '/my',
        component: My
      },
      { //项目介绍的路由
        name: "project",
        path: '/project',
        component: Project
      },
      { //签名的路由
        name: "autograph",
        path: '/autograph',
        component: Autograph
      },
      { //个人信息的路由
        name: "personal",
        path: '/personal',
        component: Personal 
      },
      { //我的地址的路由
        name: "address",
        path: '/address',
        component: Address 
      },
      { //新增地址的路由
        name: "newaddress",
        path: '/newaddress',
        component: Newaddress 
      },
      { //地图的路由
        name: "maps",
        path: '/maps',
        component: Maps 
      },
      { //产权管理的路由
        name: "administration",
        path: '/administration',
        component: Administration 
      },
      { //管理商铺的路由
        name: "management",
        path: '/management',
        component: Management 
      },
      { //收益的路由
        name: "profit",
        path: '/profit',
        component: Profit 
      },
      { //我的签约的路由
        name: "mycontract",
        path: '/mycontract',
        component: Mycontract 
      },
      { //我的预约的路由
        name: "myreservation",
        path: '/myreservation',
        component: Myreservation 
      },
      { //系统设置的路由
        name: "systemsettings",
        path: '/systemsettings',
        component: Systemsettings 
      },
      { //修改密码的路由
        name: "loginpassword",
        path: '/loginpassword',
        component: Loginpassword 
      },
      { //我的钱包的路由
        name: "wallet",
        path: '/wallet',
        component: Wallet 
      },
      { //余额的路由
        name: "balance",
        path: '/balance',
        component: Balance 
      },
      { //新闻资讯的路由
        name: "information",
        path: '/information',
        component: Information 
      },
      { //发现的路由
        name: "find",
        path: '/find',
        component: Find 
      },
      { //商城的路由
        name: "shoppingmall",
        path: '/shoppingmall',
        component: Shoppingmall ,
        // children:[
        //   {path:'',component:qwe},{path:'asd',component:asd},{path:'zxc',component:zxc},
        // ]
      },
      { //选举的路由
        name: "election",
        path: '/election',
        component: Election 
      },
      { //首轮的路由
        name: "firstround",
        path: '/firstround',
        component: Firstround 
      },
      { //搜索的路由
        name: "search",
        path: '/search',
        component: Search 
      },
      { //第二轮的路由
        name: "secondround",
        path: '/secondround',
        component: Secondround 
      },
      { //最终的路由
        name: "final",
        path: '/final',
        component: Final 
      },
      { //首轮结果的路由
        name: "firstresults",
        path: '/firstresults',
        component: Firstresults 
      },
      { //权益人的路由
        name: "equityholder",
        path: '/equityholder',
        component: Equityholder 
      },,
      { //权益人的路由
        name: "equityholder1",
        path: '/equityholder1',
        component: Equityholder1 
      },
      { //防伪编号的路由
        name: "security",
        path: '/security',
        component: Security 
      },
      { //绑定银行卡的路由
        name: "binding",
        path: '/binding',
        component: Binding 
      },
      { //验证手机号的路由
        name: "verification",
        path: '/verification',
        component: Verification 
      },
      { //成为权益人的路由
        name: "become",
        path: '/become',
        component: Become 
      },
      { //提现的路由
        name: "withdrawals",
        path: '/withdrawals',
        component: Withdrawals 
      },
      { //消息中心的路由
        path: '/news',
        component: News ,
        children:[
          {path:'', component: notice},
          {path:'new', component: New},
        ]
      },
      { //知识库的路由
        name: "knowledge",
        path: '/knowledge',
        component: knowledge 
      },
      { //知识库的路由
        name: "knowledgeBase",
        path: '/knowledgeBase',
        component: knowledgeBase 
      },
      { //充值的路由
        name: "recharge",
        path: '/recharge',
        component: Recharge 
      },
      { //我的银行卡的路由
        name: "bankcard",
        path: '/bankcard',
        component: Bankcard 
      },
      { //身份验证的路由
        name: "authentication",
        path: '/authentication',
        component: Authentication 
      },
      { //身份验证的路由
        name: "authenticationName",
        path: '/authenticationName',
        component: AuthenticationName 
      },
      { //扫描的路由
        name: "scanning",
        path: '/scanning',
        component: Scanning 
      },
      { //上传头像的路由
        name: "upload",
        path: '/upload',
        component: Upload 
      },
      { //第二轮结果的路由
        name: "secondresult",
        path: '/secondresult',
        component: Secondresult 
      },
      { //修改支付密码的路由
        name: "paymentpassword",
        path: '/paymentpassword',
        component: Paymentpassword 
      },
      { //修改支付密码的路由
        name: "pai",
        path: '/pai',
        component: Pai 
      },
      { //帮助的路由
        name: "help",
        path: '/help',
        component: Help 
      },
      { //收益明细的路由
        name: "detailed",
        path: '/detailed',
        component: Detailed 
      },
      // { //商城的路由
      //   name: "shoppingmalls",
      //   path: '/shoppingmalls',
      //   component: Shoppingmalls ,
      // },
      { //餐厅简介
        name: "restaurant",
        path: '/restaurant',
        component: Restaurant ,
      },
      { //支付完成
        name: "zhifuwc",
        path: '/zhifuwc',
        component: Zhifuwc ,
      },
      { //银行卡信息
        name: "bankinformation",
        path: '/bankinformation',
        component: Bankinformation ,
      },
  ]
})
