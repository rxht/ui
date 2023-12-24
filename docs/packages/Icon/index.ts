import { App, Plugin } from 'vue';
import rIcon from './index.vue';

rIcon.name = 'rIcon';

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('rIcon', rIcon);
  }
};

export { rIcon };
