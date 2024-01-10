<template>
  <div class="home">
    <AutoI />
    <div>home</div>
    <!-- <button @click="handleClick">click me</button> -->
    <!-- <el-button type="primary">Primary</el-button> -->
    <el-button
      type="warning"
      :icon="Star"
      circle />
    <!-- <el-icon><icon-ep-service /></el-icon>
    <el-icon><icon-ep-minus /></el-icon> -->
    <!-- 或 -->
    <el-icon
      :size="20"
      color="red"
      ><IEpRight
    /></el-icon>
    <IEpShare
      style="font-size: 20px; color: skyblue; width: 1em; height: 1em" />
    <TestB />
  </div>
</template>

<script setup lang="ts">
  import { Star } from '@element-plus/icons-vue';
  import { useRoute } from 'vue-router';
  import { ref, provide } from 'vue';
  import { useUserStore } from '@/store/user';
  import TestB from '@/pages/TestB.vue';
  import { showPopupKey, titleKey } from '@/keys';

  const showPopup = ref(false);
  // 正确
  provide(showPopupKey, showPopup);
  // 正确
  provide(titleKey, 'Hello');

  // provide('test', 'aaa');
  // const a = ref(3);
  // console.log(`output->a`,a)
  // console.log(`output->'cccc'`, 'cccc');

  const userStore = useUserStore();

  const handleClick = () => {
    userStore.saveMeToo += `~`;
  };
</script>

<style scoped></style>
