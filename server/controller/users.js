const {query} = require("../db");
const joi = require("joi")
const {regisget, findUserByName} = require("../model/users");
const {required} = require("joi");
// 注册
module.exports.register = async function (ctx) {
  const {username, password, mobile} = ctx.request.body;
  // 校验用户名、密码、手机号
  let result = await findUserByName(username);
  let schema = joi.object({
    username:joi.string()
  })
  if (result.length > 0) {
    return ctx.body = {
      status: 401,
      msg: "用户已经注册"
    }
  } else {
    await regisget(username, password, mobile);
    ctx.body = {
      status: 200,
      msg: "注册成功"
    }
  }


}