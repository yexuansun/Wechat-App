// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
//引入发送邮件的类库
var nodemailer = require('nodemailer')
// 创建一个SMTP客户端配置
var config = {
  host: 'smtp.qq.com', //网易163邮箱 smtp.163.com
  port: 465, //网易邮箱端口 25
  auth: {
    user: '317834503@qq.com', //邮箱账号  
    pass: 'qzhnukftihhebidi' //邮箱的授权码
  }
};
// 创建一个SMTP客户端对象
var transporter = nodemailer.createTransport(config);
// 云函数入口函数3
exports.main = async (event, context) => {
  // 创建一个邮件对象
  var mail = {
    from: '慧渡医疗 <317834503@qq.com>',
    subject: '慧渡医学实验室检测回执',
    to: event.mail,
    text: '尊敬的客户,您好\n\n感谢您选择上海慧渡医学实验室做基因检测,我们已经收到受检者(名字:'+event.name+',条形码:'+event.barcode+')相关信息,并收到检测费用'+event.money+'元,实验室收到样本后将尽快处理并在规定时间内发送该检测报告到您指定的邮箱.\n\n如有问题,欢迎联系我们:\n慧渡支持邮箱:suport.cn@huidumed.com\n慧渡支持电话:+862167180693'
  };

  let res = await transporter.sendMail(mail);
  return res;
}