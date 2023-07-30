<template>
  <div class="list">
    <AppVideoItem v-for="item in data.list" :key="item.id" :video="item" />
  </div>
</template>

<script setup>
import AppVideoItem from "@/components/app-video-item.vue";
import { reactive, onMounted } from "vue";
import { getVideosList } from "@/api/index";

// TyepScript 的接口用于定义（标记）数据格式
// interface VideoItem {
//   commentCount: string;
//   desc: string;
//   id: number;
//   imgSrc: string;
//   link: string;
//   playCount: string;
//   videoSrc: string;
// }

const data = reactive({
  list: [] // as VideoItem[]
});
onMounted(async () => {
  const res = await getVideosList();
  if (res.data.code === 0) data.list = res.data.result;
});
</script>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
