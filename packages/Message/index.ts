import { VNode, createVNode, render, App, AppContext, Plugin } from 'vue';
import MessageConstructor from './index.vue';
MessageConstructor.name = 'rMessage';

interface MessageType {
  id: string;
  center: boolean;
  text: string | VNode;
  type: string;
  timeout: number;
  icon: string;
  color: string;
  bgcolor: string;
  customClass: string;
  close: boolean;
  onClose: Function;
  offset: number;
  zIndex: number;
  duration: number;
}

type MessageParams = Partial<MessageType> | string;

export type MessageFn = (params: MessageParams) => void;

export interface Message {
  success: MessageFn;
  warning: MessageFn;
  info: MessageFn;
  error: MessageFn;
}

const instances: VNode[] = [];
let seed = 1;
const gap = 16;

const rMessage: MessageFn & Partial<Message> = function (
  params: MessageParams
) {
  if (!document) return;
  if (typeof params === 'string') {
    params = {
      text: params
    };
  }

  let offset = params.offset || 20;
  instances.forEach((vnode) => {
    offset += (vnode.el?.offsetHeight || 0) + gap;
  });

  offset += gap;

  const id = `rMessage_${seed++}`;
  const userOnClose = params.onClose;
  const props = {
    ...params,
    id,
    offset,
    onClose: () => close(id, userOnClose)
  };
  const children = [params.text];
  const vnode = createVNode(MessageConstructor, props, {
    default: () => children
  });

  const container = document.createElement('div');
  const appendTo: HTMLElement = document.body;

  vnode.props!.onDestroy = () => {
    render(null, container);
  };
  render(vnode, container);
  instances.push(vnode);
  appendTo && appendTo.appendChild(container.firstChild!);
};

const messageTypes = ['success', 'info', 'warning', 'error'] as const;

messageTypes.forEach((type) => {
  rMessage[type] = (params: MessageParams) => {
    if (typeof params === 'string') params = { text: params };
    rMessage({ ...params, type });
  };
});

export const close = (id: string, userOnClose?: Function) => {
  const idx = instances.findIndex((vnode) => id === vnode.component!.props.id);
  if (idx === -1) return;

  const vnode = instances[idx];
  if (!vnode) return;
  userOnClose?.();

  const removedHeight = vnode.el!.offsetHeight;
  instances.splice(idx, 1);

  const len = instances.length;
  if (len < 1) {
    seed = 0;
    return;
  }

  for (let i = idx; i < len; i++) {
    const pos =
      Number.parseInt(instances[i].el!.style['top'], 10) - removedHeight - gap;

    instances[i].component!.props.offset = pos;
  }
};

export const MessagePlugin: Plugin = {
  install(app: App) {
    // 兼容vue2可以使用this.$message
    app.config.globalProperties.$message = rMessage;
  }
};
export { rMessage };
