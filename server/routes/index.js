const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  console.log(process.env.NODE_ENV);
  ctx.body = {
    data: process.env.NODE_ENV,
  };
});
// 轮播图数据
router.get("/banners", async (ctx) => {
  ctx.body = {
    status: 200,
    data: [
      {
        id: 1,
        img_src: "/images/banner1.png",
      },
      {
        id: 2,
        img_src: "/images/banner2.png",
      },
      {
        id: 3,
        img_src: "/images/banner3.png",
      },
      {
        id: 4,
        img_src: "/images/banner4.png",
      },
      {
        id: 5,
        img_src: "/images/banner5.png",
      },
    ],
  };
});
// 宫格数据
router.get("/gridlist", async (ctx) => {
  ctx.body = {
    status: 200,
    data: [
      {
        id: 1,
        img_src: "/images/nav1.png",
      },
      {
        id: 2,
        img_src: "/images/nav2.png",
      },
      {
        id: 3,
        img_src: "/images/nav3.png",
      },
      {
        id: 4,
        img_src: "/images/nav4.png",
      },
      {
        id: 5,
        img_src: "/images/nav5.png",
      },
      {
        id: 6,
        img_src: "/images/nav6.png",
      },
    ],
  };
});
// 鞋子数据
router.get("/gridlist", async (ctx) => {
  ctx.body = {
    status: 200,
    data: [
      {
        name: "adidas阿迪达斯 男式 场下休闲篮球鞋S83700",
        img: "/images/product.jpg",
        price: 1.0,
        oldPrice: 888.0,
      },
      {
        name: "FORUM 84 LOW 新款低帮经典运动鞋",
        img: "/images/product.jpg",
        price: 1.0,
        oldPrice: 899.0,
      },
      {
        name: "adidas阿迪达斯 男式 场下休闲篮球鞋S83700",
        img: "/images/product.jpg",
        price: 1.0,
        oldPrice: 888.0,
      },
      {
        name: "adidas阿迪达斯 男式 场下休闲篮球鞋S83700",
        img: "/images/product.jpg",
        price: 1.0,
        oldPrice: 888.0,
      },
    ],
  };
});

module.exports = router;
