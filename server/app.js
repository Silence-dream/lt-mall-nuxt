const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 路由引入
const index = require('./routes/index')
const category = require('./routes/category')
const users = require('./routes/users')
const banners = require('./routes/banners')
const gridList = require('./routes/gridlist')
const sportList = require('./routes/sportList')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(category.routes(), category.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(banners.routes(), banners.allowedMethods())
app.use(gridList.routes(), gridList.allowedMethods())
app.use(sportList.routes(), sportList.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
module.exports = app
//
