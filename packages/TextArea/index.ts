import { App, Plugin } from 'vue';
import rTextArea from './index.vue';

rTextArea.name = 'rTextArea'

export const TextAreaPlugin: Plugin = {
  install(app: App) {
    app.component('rTextArea', rTextArea);
  },
};

export {
  rTextArea,
};
