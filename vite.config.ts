/*
 * @Author: Yu-Zhang666 1415989230@qq.com
 * @Date: 2022-09-14 21:43:21
 * @LastEditors: Yu-Zhang666 1415989230@qq.com
 * @LastEditTime: 2022-09-14 22:34:11
 * @FilePath: \vite-admin\vite.config.ts
 * @Description:
 * 
 * Copyright (c) 2022 by Yu-Zhang666 1415989230@qq.com, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    Unocss({ /* options */ })
  ]
})


