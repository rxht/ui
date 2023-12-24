import { App, Plugin } from 'vue';
import rButton from './index.vue';

rButton.name = 'rButton';

export const ButtonPlugin: Plugin = {
  install: (app: App) => app.component(rButton.name, rButton)
};

export { rButton };
