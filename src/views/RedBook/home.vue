<template>
    <van-nav-bar title="ChatBranch" fixed style="-webkit-app-region: drag">
        <template #right>
            <!-- <van-icon name="search" size="18" /> -->
            <van-icon name="bookmark-o" size="18" :style="{ 'color': alwaysOnTop ? '#13386c' : '#969799', '-webkit-app-region': 'no-drag'}" @click="setAlwaysOnTop"/>
        </template>
    </van-nav-bar>
    <div style="margin-top: 40px;"></div>
    <van-cell v-for="(item, idx) in articleList" center :title="item.title" :label="item.description"
        @click="toArticle(item.objectId)">
    </van-cell>
    <van-floating-bubble icon="plus" @click="AddArticle" />
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const alwaysOnTop = ref(false)
const setAlwaysOnTop = () => {
    alwaysOnTop.value = !alwaysOnTop.value
    if (!isMobile){
        // console.log()
        window.ipcRenderer.send('setAlwaysOnTop', alwaysOnTop.value)
    }
}
const articleList = ref([])
const router = useRouter()
const getArticleList = async () => {
    let query = Bmob.Query("article")
    query.order("createdAt")
    let res = await query.find()
    articleList.value = res
}

const toArticle = (id) => {
    router.push({
        path: '/article',
        // name: 'home',
        query: {
            id: id
        }
    })
}

const AddArticle = () => {
    router.push({
        path: '/article',
        // name: 'home',
        query: {
            id: ''
        }
    })
}
onMounted(() => {
    getArticleList()
})
</script>