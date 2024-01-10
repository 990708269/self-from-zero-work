import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; //这个path用到了上面安装的@types/node
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),

        // Auto import icon components
        // 自动导入图标组件,此处不配置，默认前缀为i,引入时使用格式有2种
        // 1.

        IconsResolver({
          prefix: 'icon',
        }),
      ],
      // unplugin-auto-import会默认在要目录生成auto-imports.d.ts文件，描述自动导入的 API
      // 生成自动导入的TS声明文件
      dts: path.resolve('./', 'auto-imports.d.ts'),
    }),

    Components({
      resolvers: [
        // 使用组件解析器IconsResolver时，必须遵循名称转换才能正确推断图标，格式如下:
        //    {prefix}-{collection}-{iconName}
        // 自动注册图标组件,在组件中2种使用图标的方法(无需再次导入)
        /**
         * 1. <el-icon :size="20" color="red" ><IEpRight/></el-icon>
         *    第2种，因为svg默认是width/height: 1.2em，如果需要覆盖，则需要css属性覆盖
         * 2.<IEpSharestyle="font-size: 20px; color: skyblue; width: 1em; height: 1em" />
         */
        IconsResolver({
          // 修改Icon组件前缀，不设置则默认为i,禁用则设置为false
          //prefix: 'icon',
          enabledCollections: ['ep'], // 指定collection，即指定为elementplus图标集ep
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],
      // unplugin-vue-components对应会在根目录生成components.d.ts文件，描述自动导入的 component
      dts: path.resolve('./', 'components.d.ts'),
    }),

    Icons({
      autoInstall: true,
    }),
  ],
  //这里进行配置别名
  resolve: {
    alias: {
      '@': pathSrc, // @代替src
      '#': path.resolve('./types'), // #代替types
    },
  },
});
