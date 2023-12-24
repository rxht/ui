import { App, Plugin } from 'vue';
import rTooltip from './index.vue';

rTooltip.name = 'rTooltip';

export const TooltipPlugin: Plugin = {
  install(app: App) {
    app.component('rTooltip', rTooltip);
  }
};

export { rTooltip };
