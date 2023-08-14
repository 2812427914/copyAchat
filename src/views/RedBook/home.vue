<template>
    <van-cell v-for="(item, idx) in articleList" center :title="item.title"  :label="item.description" @click="toArticle(item.objectId)">
    </van-cell>
    <van-floating-bubble icon="chat" @click="AddArticle" />
</template>
<script setup>
import {onMounted, ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';

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
onMounted( () => {
    getArticleList()
})
</script>