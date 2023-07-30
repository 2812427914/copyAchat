<template>
  <van-tabs v-model:active="active">
    <van-tab
      v-for="item in data.list"
      :key="item.id"
      :title="item.text"
    />
  </van-tabs>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getNavList } from "@/api/index.js";

// TyepScript 的接口用于定义（标记）数据格式
// interface NavItem {
//   id: string;
//   text: string;
// }
// 频道数据，[] as NavItem[] 表示 list 数据为数组，数组的每一项需要复合 NavItem 接口的格式
// TypeScript 好处：模板中使用 list 和 item 的时候，书写代码有类型提示，鼠标悬停变量也有类型提醒
const data = reactive({
  list: [] // as NavItem[]
});
const active = ref(0);
onMounted(async () => {
  const res = await getNavList();
  if (res.data.code === 0) data.list = res.data.result;
});
</script>
