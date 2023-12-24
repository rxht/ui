const listFilePath = '../../packages/list.json';

const routerFileFrom = './.template/router.ts.tpl';
const routerFileTo = '../../src/router/router.ts';

const installFileFrom = './.template/install.ts.tpl';
const installFileTo = '../../packages/index.ts';

module.exports = {
  listFilePath,
  routerFileFrom,
  routerFileTo,
  installFileFrom,
  installFileTo
};
