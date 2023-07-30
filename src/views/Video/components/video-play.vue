<template>
  <div class="video-play">
    <video controls class="video" :poster="videoInfo.poster" :src="videoInfo.videoSrc"></video>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
// 🔔 进阶用法：如果多个地方都用到同样的接口定义，还可以把接口抽离出去独立维护
// import { IVideoInfo } from '../types'

defineProps({
  videoInfo: {
    type: Object,
    required: true
  }
})
</script>

<style lang="less" scoped>
.video-play {
  background-color: #000;
  .video {
    width: 100%;
    min-height: 210px;
  }
}
</style>
