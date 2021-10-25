const router = require('koa-router')()
router.prefix("/sportList")
router.get('/', async (ctx, next) => {

  ctx.body = {
    status: 200,
    data: [
      {
        name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
        img: '/images/product.jpg',
        price: 1.00,
        oldPrice: 888.00
      },
      {
        name: 'FORUM 84 LOW 新款低帮经典运动鞋',
        img: '/images/product.jpg',
        price: 1.00,
        oldPrice: 899.00
      },
      {
        name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
        img: '/images/product.jpg',
        price: 1.00,
        oldPrice: 888.00
      },
      {
        name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
        img: '/images/product.jpg',
        price: 1.00,
        oldPrice: 888.00
      }
    ]
  }
})

module.exports = router
