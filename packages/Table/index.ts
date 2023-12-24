import { App, Plugin } from 'vue';
import rTable from './index.vue';

rTable.name = 'rTable'

export const TablePlugin: Plugin = {
  install(app: App) {
    app.component('rTable', rTable);
  },
};

export {
  rTable,
};
