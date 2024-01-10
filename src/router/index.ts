import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { useUserStore } from '@/store/user';

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes,
});

router.beforeEach(() => {
  const userStore = useUserStore();
  // userStore.saveMeToo = 'saveMeToo~~~'
  console.log(`output->userStore`, userStore.saveMeToo);
});

export default router;
