<template>
  <div>dddd -- {{ key }}</div>
</template>

<script setup lang="ts">
  import { inject } from 'vue';
  import { showPopupKey, titleKey } from '@/keys';

  const key = inject(titleKey, '20');

  // 如果不设置默认值，也不使用InjectionKey<T>类型的key,那么key1的类型为unknown
  let key1 = inject('test', 20);
</script>

<style scoped></style>
