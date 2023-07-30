<script setup>
import { ref } from 'vue'
import { Cell, Field, CellGroup, Button, NavBar,TextEllipsis } from 'vant';
import { reactive } from 'vue';

const author = ref('zihangt')
const taskOverview = ref('您可以使用任务描述来完成各种目的，例如您想要添加一个与任务相关的连接、您想要添加比任务名称限制字数更长的额外信息，或者您可能想要确保重要的信息不会被淹没在 ...')
const text = ref('那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。')
const taskShortDescription = ref('任务短标题')
</script>

<template>
    <NavBar :title="author" left-text="返回" left-arrow @click-left="onClickLeft"></NavBar>
    <Cell>
        <Field v-model="taskShortDescription" placeholder="请输入短标题"></Field>
        <Field v-model="taskShortDescription" placeholder="请输入短标题"></Field>
        <!-- <TextEllipsis rows="2" :content="text" expand-text="展开" collapse-text="收起" position="middle"></TextEllipsis> -->
    </Cell>
    
    <!-- <CellGroup> -->
    <!-- <Cell title="单元格" value="内容" ></Cell> -->
    <Cell >
        <template #title>
            <Field v-model="taskShortDescription" placeholder="请输入短标题"></Field>
            <!-- {{taskShortDescription }} -->
        </template>
        <template #label>
            <TextEllipsis rows="2" :content="text" expand-text="展开" collapse-text="收起" position="middle">
                <!-- <template #content>
                    {{ text }}
                </template> -->
            </TextEllipsis>
        </template>
    </Cell>
    <!-- </CellGroup> -->
    <!-- <div class="van-multi-ellipsis--l2">
        这是一段最多显示两行的文字，多余的内容会被省略，阿斯顿发送到发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发
    </div> -->
</template>
