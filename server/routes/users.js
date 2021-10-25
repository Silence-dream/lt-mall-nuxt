const {query} = require("../db");
const {register} = require("../controller/users");
const router = require("koa-router")();

router.prefix("/users")
/**
 * @api {get} /register 注册用户信息
 * @apiName 注册用户
 * @apiGroup Users
 *
 * @apiParam {String} Username 用户名
 * @apiParam {number} password 密码
 * @apiParam {number} mobile 手机号
 *
 * @apiSuccess {Number} status (200 成功,401 失败)
 * @apiSuccess {String} msg (200 注册成功 401 用户已经注册)
 * @apiSuccessExample {json} 成功时返回:
 * {
 *   status: 200,
 *   msg: "注册成功"
 * }
 * @apiSuccessExample {json} 失败时返回:
 * {
 *   status: 401,
 *   msg: "用户已经注册"
 * }
 *
 *
 *
 *
 *
 */
function 注册用户() { return; }
router.get("/register", register)

module.exports = router