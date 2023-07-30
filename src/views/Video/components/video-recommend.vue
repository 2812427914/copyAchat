<template>
  <div class="list">
    <AppVideoItem v-for="item in list" :key="item.id" :video="item" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getRecommendList } from "@/api/index";
import AppVideoItem from "@/components/app-video-item.vue";
// import { IVideoItem } from "../types";

const list = ref([]);

onMounted(async () => {
  const { data } = await getRecommendList();
  list.value = data.result;
});
</script>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
