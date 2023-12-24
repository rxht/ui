import { App, Plugin } from 'vue';
import rInput from './index.vue';

rInput.name = 'rInput'

export const InputPlugin: Plugin = {
  install(app: App) {
    app.component('rInput', rInput);
  },
};

export {
  rInput,
};
