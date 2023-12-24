import { App, Plugin } from 'vue';
import rBackTop from './index.vue';

rBackTop.name = 'rBackTop'

export const BackTopPlugin: Plugin = {
  install(app: App) {
    app.component('rBackTop', rBackTop);
  },
};

export {
  rBackTop,
};
