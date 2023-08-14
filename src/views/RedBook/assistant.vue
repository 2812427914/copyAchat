<template>
  <van-nav-bar title="" left-text="返回" left-arrow @click-left="router.go(-1)"/>
    <van-contact-list
        v-model="chosenContactId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
        />
</template>
<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const assistantList = ref([])
const getArticleList = async () => {
    let query = Bmob.Query("assistant")
    query.order("createdAt")
    let res = await query.find()
    assistantList.value = res
}

const chosenContactId = ref('1');
    const list = ref([
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
      },
    ]);

const onAdd = () => showToast('新增');
const onEdit = (contact) => showToast('编辑' + contact.id);
const onSelect = (contact) => showToast('选择' + contact.id);

</script>