import { App, Plugin } from 'vue';
import r{{ compName }} from './index.vue';

r{{compName}}.name = 'r{{compName}}'

export const {{ compName }}Plugin: Plugin = {
  install(app: App) {
    app.component('r{{ compName }}', r{{ compName }});
  },
};

export {
  r{{ compName }},
};
