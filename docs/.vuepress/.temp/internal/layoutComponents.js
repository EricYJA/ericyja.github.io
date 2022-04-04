import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("A:/projects/ericyja.github.io/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("A:/projects/ericyja.github.io/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
