/// <reference types="vite/client" />

// 在.env.*文件中新增的变量，在此定义后，才会获得ts提示
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_P: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
