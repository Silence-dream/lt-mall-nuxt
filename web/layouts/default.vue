<template>
  <!-- 公共布局文件 -->
  <div class='layout-home'>
    <header>
      <van-nav-bar
        :title='title'
        left-arrow
        left-text='返回'
        @click-left='$router.go(-1)'
      >
        <template #right>
          <van-icon name='search' size='18' />
        </template>
      </van-nav-bar>
    </header>
    <main>
      <Nuxt></Nuxt>
    </main>
    <footer>
      <van-tabbar v-model='active'>
        <van-tabbar-item icon='home-o' name='index' to='/'>首页</van-tabbar-item>
        <van-tabbar-item icon='search' name='category' to='/category'>分类</van-tabbar-item>
        <van-tabbar-item icon='friends-o' name='cart' to='/cart'>购物车</van-tabbar-item>
        <van-tabbar-item icon='setting-o' name='my' to='my'>我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      active: 'index',
      title: ''
    }
  },
  watch: {
    $route() {
      // 监听 route 选中 tabbar
      this.active = this.$route.name
      this.getTitle(this.$route.name)
    }
  },
  mounted() {
    // 页面刷新选中 tabbar
    this.active = this.$route.name
    this.getTitle(this.$route.name)
  },
  methods: {
    getTitle(routeName) {
      const result = {
        index: '首页',
        category: '分类',
        cart: '购物车',
        my: '我的'
      }
      this.title = result[routeName]
    }
  }
}
</script>

<!--<style lang='scss' scoped></style>-->
