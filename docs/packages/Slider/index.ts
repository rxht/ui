import { App, Plugin } from 'vue';
import rSlider from './index.vue';

rSlider.name = 'rSlider'

export const SliderPlugin: Plugin = {
  install(app: App) {
    app.component('rSlider', rSlider);
  },
};

export {
  rSlider,
};
