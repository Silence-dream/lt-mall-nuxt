const {query} = require("../db");
const {category} = require("../controller/category");
const router = require("koa-router")();
router.prefix("/category")
//
router.get("/", category)

module.exports = router