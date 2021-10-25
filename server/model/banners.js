const {query} = require("../db");
module.exports.getBannerImg = async () => {
  return await query("SELECT id,brandLogo as img_src from brand;")
}