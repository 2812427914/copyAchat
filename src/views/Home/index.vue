<script setup>
// script setup 中只需要导入组件，无需注册
import AppHeader from "@/components/app-header.vue"
import HomeChannel from "@/views/Home/components/HomeChannel.vue"
// import HomeChannel from "./components/HomeChannel.vue"
import HomeSwiper from "./components/home-swiper.vue"
import HomeVideoList from "./components/home-video-list.vue"
</script>

<template>
  <van-sticky>
    <!-- 头部组件 -->
    <AppHeader />
    <!-- 频道组件 -->
    <HomeChannel />
  </van-sticky>
  <!-- 轮播组件 -->
  <HomeSwiper />
  <!-- 视频列表 -->
  <HomeVideoList />
</template>

