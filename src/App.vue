<template>
  <router-view v-slot="{ Component }">
    <Transition
      name="fade"
      mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
