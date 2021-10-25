const {banners} = require("../controller/banners");
const router = require('koa-router')()
router.prefix("/banners")
router.get('/',banners)

module.exports = router