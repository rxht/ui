import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

import '@/assets/markdown.css';

// import rxhui from '../dist/rxh-ui.es';
import rxhui from 'Packages';
import Preview from '@/components/Preview.vue';

const app = createApp(App);
app.component('Preview', Preview);
app.use(rxhui).use(router).mount('#app');
