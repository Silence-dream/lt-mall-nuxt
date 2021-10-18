const {query} = require("../db");
/**
 * 注册用户
 * @param username
 * @param password
 * @param mobile
 * @returns {Promise<unknown>}
 */
module.exports.regisget = async function (username, password, mobile) {
  return await query(`insert into user (username,password,mobile)
    values("${username}", "${password}", "${mobile}")`)
}
/**
 * 检测用户是否已经注册
 * @param username
 * @returns {Promise<unknown>}
 */
module.exports.findUserByName = async function (username) {
  return await query("select * from user where username= ? ", [username])
}