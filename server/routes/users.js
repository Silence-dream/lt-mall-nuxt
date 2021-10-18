const {query} = require("../db");
const {register} = require("../controller/users");
const router = require("koa-router")();
router.prefix("/users")
// 注册
router.get("/register", register)

module.exports = router