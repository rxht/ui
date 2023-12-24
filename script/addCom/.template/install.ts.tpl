import { App, Plugin } from 'vue';

{{ importPlugins }}

const plugins: Plugin[] = [{{ installPlugins }}]

const rxhui: Plugin = {
  install(app: App) {
    plugins.forEach((plugin) => plugin.install?.(app));
  },
};

export default rxhui;

{{ exportPlugins }}