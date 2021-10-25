const { query } = require("../db");
module.exports.category = async function (ctx) {
  let result = await query("select * from category");
  ctx.body = {
    status: 200,
    data: result,
  };
};
