const {query} = require("../db");
const {regisget, findUserByName} = require("../model/users");
// 注册
module.exports.register = async function (ctx) {
  const {username, password, mobile} = ctx.request.body;
  let result = await findUserByName(username);
  if (result.length > 0) {
    return ctx.body = {
      status: 401,
      msg: "用户已经注册"
    }
  } else {
    await regisget(username, password, mobile)
    ctx.body = {
      status: 200,
      msg: "注册成功"
    }
  }


}