<template>
  <div class='cz_live'>
    <img alt='' src='images/title1.png' />
    <div class='mui-clearfix'>
      <a v-for='(item,index) in sportsList' :key='index' class='cz_product' href='#'>
        <div class='box'>
          <img :src='item.img' alt='' />
          <p class='name'>{{ item.name }}</p>
          <p>
            <span class='price'>¥{{ item.price.toFixed(2) }}</span
            ><span class='oldPrice'>¥{{ item.oldPrice.toFixed(2) }}</span>
          </p>
          <button class='button'>立即购买</button>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sportsList: {
      type: Array,
      default: () => [
        {
          'name': 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
          'img': '/images/product.jpg',
          'price': 1,
          'oldPrice': 888
        }
      ]
    }
  }
}
</script>
<style scoped>
.cz_live {
  padding: 0 10px;
  margin-top: 10px;
  overflow: hidden;
  padding-bottom: 100px;
}

.cz_live > img {
  width: 100%;
}

.mui-clearfix::after {
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.mui-clearfix {
  /* 触发 hasLayout */
  zoom: 1;
}

.cz_product {
  float: left;
  width: 50%;
  padding: 0 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.cz_product .box {
  width: 100%;
  box-shadow: 0 0 5px #ccc;
  text-align: center;
  padding: 10px 0;
}

.cz_product .box img {
  width: 100%;
}

.cz_product .box .name {
  padding: 0 10px;
  height: 36px;
  line-height: 18px;
  overflow: hidden;
}

.cz_product .box .price {
  font-size: 12px;
  color: #f30;
  margin-right: 10px;
}

.cz_product .box .oldPrice {
  font-size: 12px;
  color: #ccc;
  text-decoration: line-through;
}

.cz_product .box .button {
  background: #069;
  color: #fff;
}
</style>
