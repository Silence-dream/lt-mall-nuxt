const {getBannerImg} = require("../model/banners");
module.exports.banners = async (ctx, next) => {
  let result = await getBannerImg()
  console.log(result)
  ctx.body = {
    status: 200,
    data: result
  }

}