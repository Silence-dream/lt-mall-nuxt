<template>
  <div id='home'>
    <!-- 1.轮播图 -->
    <IndexBanners :banners='banners'></IndexBanners>
    <!-- 2.宫格 -->
    <IndexGridList :gridlist='gridList' />
    <!-- 3.活动 -->
    <IndexActive />
    <!-- 4.品牌 -->
    <IndexBrand />
    <!-- 5.运动 -->
    <IndexSport :sports-list='sportsList' />
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $axios }) {
    // 轮播图数据
    const { data: banners } = await $axios.$get('/banners')
    // 宫格数据
    const { data: gridList } = await $axios.$get('/gridlist')
    // 运动鞋子数据
    const { data: sportsList } = await $axios.$get('/sports')
    return {
      banners,
      gridList,
      sportsList,
    }
  },
}
</script>
