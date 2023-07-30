<template>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    :show-indicators="isShow"
    lazy-render
  >
  <!-- <van-swipe-item>
      <img :src="data.list[0].imgSrc" />
    </van-swipe-item> -->
    <van-swipe-item v-for="item in data.list" :key="item.imgSrc">
      <img :src="item.imgSrc" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup >
import { reactive, onMounted } from "vue";
import { getSwiperList } from "@/api/index.js";

// TyepScript 的接口用于定义（标记）数据格式
// interface SwiperItem {
//   link: string;
//   imgSrc: string;
// }
// 是否显示指示器
const isShow = false;
const data = reactive({
  list: []
});
onMounted(async () => {
  const res = await getSwiperList();
  if (res.data.code === 0) data.list = res.data.result;
});
</script>

<style lang="less" scoped>
.my-swipe {
  img {
    width: 100%;
  }
}
</style>
