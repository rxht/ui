import { App, Plugin } from 'vue';
import rSwitch from './index.vue';

rSwitch.name = 'rSwitch'

export const SwitchPlugin: Plugin = {
  install(app: App) {
    app.component('rSwitch', rSwitch);
  },
};

export {
  rSwitch,
};
