<!-- <script setup>
import { remote } from 'electron';
// 获取窗口固定状态
let isAlwaysOnTop = ref(false);
const currentWindow = remote.getCurrentWindow();
isAlwaysOnTop.value = currentWindow.isAlwaysOnTop();

// 固定前面
const drawingPin = () => {
  if (isAlwaysOnTop.value) {
    currentWindow.setAlwaysOnTop(false);
    isAlwaysOnTop.value = false;
  } else {
    currentWindow.setAlwaysOnTop(true);
    isAlwaysOnTop.value = true;
  }
}
</script> -->

<template>
  <header class="app-header">
    <!-- logo -->
    <a class="logo" href="#">
      <i class="iconfont Navbar_logo"></i>
    </a>
    <!-- 搜索 -->
    <a class="search" href="#">
      <i class="iconfont ic_search_tab"></i>
    </a>
    <!-- 头像 -->
    <a class="face" href="#">
      <img src="@/assets/images/login.png" />
    </a>
    <!-- 下载按钮 -->
    <!-- <div class="down-app" @click="drawingPin">下载 APP</div> -->
  </header>
</template>

<style lang="less" scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 2vw 3vw;
  background-color: #fff;
  .logo {
    flex: 1;
    .Navbar_logo {
      color: #fb7299;
      font-size: 7.46667vw;
    }
  }
  .search {
    padding: 0 2vw;
    .ic_search_tab {
      color: #ccc;
      font-size: 5.86667vw;
    }
  }
  .face {
    padding: 0 4vw;
    img {
      width: 6.4vw;
    }
  }
  .down-app {
    font-size: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb7299;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>
