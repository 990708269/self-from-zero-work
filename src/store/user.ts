import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
  state: () => ({
    save: {
      me: 'saved',
      notMe: 'not-saved',
    },
    saveMeToo: 'saved111',
  }),
  // 开启数据持久化(注意并非立即存储，当下次更新操作时，才会变化)
  persist: {
    key: 'my-custom-key',
    paths: ['save.me', 'saveMeToo'],
  },
});
