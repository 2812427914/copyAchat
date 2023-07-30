<template>
    <div class="title-bar">
      <!-- 自定义标题栏的内容 -->
      asdfasdf
    </div>
  </template>
  
  <script>
  import { remote } from '@electron/remote'
  
  export default {
    mounted() {
      const currentWindow = remote.getCurrentWindow()
  
      // 设置窗口的拖动区域为自定义标题栏
      const titleBar = this.$el
      currentWindow.setIgnoreMouseEvents(true, { forward: true })
      titleBar.addEventListener('mousedown', () => {
        currentWindow.setIgnoreMouseEvents(false)
      })
      titleBar.addEventListener('mouseup', () => {
        currentWindow.setIgnoreMouseEvents(true, { forward: true })
      })
    }
  }
  </script>
  
  <style scoped>
  .title-bar {
    /* 自定义标题栏的样式 */
  }
  </style>
  