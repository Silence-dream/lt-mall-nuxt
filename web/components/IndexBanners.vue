<template>
  <div id='index_swipe'>
    <van-swipe :autoplay='3000'>
      <van-swipe-item v-for='(item) in banners' :key='item.id'>
        <img v-lazy='item.img_src' />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'IndexBanner',
  props: {
    banners: {
      type: Array,
      default: () => [{ id: 0, img_src: '/images/banner1.png' }]
    }
  }
}
</script>

<style lang='scss' scoped>
#index_swipe {
  img {
    width: 100%;
    height: 200px;
  }
}

</style>
