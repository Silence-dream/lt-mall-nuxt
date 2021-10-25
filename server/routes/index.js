const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log(process.env.NODE_ENV)
  ctx.body = {
    data: process.env.NODE_ENV
  }
})


module.exports = router
