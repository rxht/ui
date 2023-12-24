import { App, Plugin } from 'vue';
import rColor from './index.vue';

rColor.name = 'rColor'

export const ColorPlugin: Plugin = {
  install(app: App) {
    app.component('rColor', rColor);
  },
};

export {
  rColor,
};
