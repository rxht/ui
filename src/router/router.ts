 const routes = [{
        title: '图标',
        name: 'Icon',
        path: '/components/Icon',
        component: () => import('Packages/Icon/docs/README.md'),
      },{
        title: '按钮',
        name: 'Button',
        path: '/components/Button',
        component: () => import('Packages/Button/docs/README.md'),
      },{
        title: '颜色',
        name: 'Color',
        path: '/components/Color',
        component: () => import('Packages/Color/docs/README.md'),
      },{
        title: '表格',
        name: 'Table',
        path: '/components/Table',
        component: () => import('Packages/Table/docs/README.md'),
      },{
        title: '输入框',
        name: 'Input',
        path: '/components/Input',
        component: () => import('Packages/Input/docs/README.md'),
      },{
        title: '滑块',
        name: 'Slider',
        path: '/components/Slider',
        component: () => import('Packages/Slider/docs/README.md'),
      },{
        title: '文字提示',
        name: 'Tooltip',
        path: '/components/Tooltip',
        component: () => import('Packages/Tooltip/docs/README.md'),
      },{
        title: '消息提示',
        name: 'Message',
        path: '/components/Message',
        component: () => import('Packages/Message/docs/README.md'),
      },{
        title: '开关',
        name: 'Switch',
        path: '/components/Switch',
        component: () => import('Packages/Switch/docs/README.md'),
      },{
        title: '回到顶部',
        name: 'BackTop',
        path: '/components/BackTop',
        component: () => import('Packages/BackTop/docs/README.md'),
      },{
        title: '文本域',
        name: 'TextArea',
        path: '/components/TextArea',
        component: () => import('Packages/TextArea/docs/README.md'),
      }];
 
 export default routes;
