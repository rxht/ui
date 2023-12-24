import { App, Plugin } from 'vue';

import { IconPlugin } from './Icon';
import { ButtonPlugin } from './Button';
import { ColorPlugin } from './Color';
import { TablePlugin } from './Table';
import { InputPlugin } from './Input';
import { SliderPlugin } from './Slider';
import { TooltipPlugin } from './Tooltip';
import { MessagePlugin } from './Message';
import { SwitchPlugin } from './Switch';
import { BackTopPlugin } from './BackTop';
import { TextAreaPlugin } from './TextArea';

const plugins: Plugin[] = [IconPlugin,ButtonPlugin,ColorPlugin,TablePlugin,InputPlugin,SliderPlugin,TooltipPlugin,MessagePlugin,SwitchPlugin,BackTopPlugin,TextAreaPlugin]

const rxhui: Plugin = {
  install(app: App) {
    plugins.forEach((plugin) => plugin.install?.(app));
  },
};

export default rxhui;

export * from './Icon'
export * from './Button'
export * from './Color'
export * from './Table'
export * from './Input'
export * from './Slider'
export * from './Tooltip'
export * from './Message'
export * from './Switch'
export * from './BackTop'
export * from './TextArea'