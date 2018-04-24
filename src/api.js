let localhostDev = true;
let host= localhostDev ? '/fangyuanli' : 'http://www.homeamc.cn';
let httpUrl = {
    'dev': host,
    'imgUrl': host + '/puman/kaptcha/',
}
export {httpUrl}