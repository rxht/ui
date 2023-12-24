const fs = require('fs-extra');
const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);
const readJSONSync = (dir) => fs.readJSONSync(resolve(dir));
const readFileSync = (dir) => fs.readFileSync(resolve(dir), 'utf8');
const outputFile = (dir, content) =>
  fs.outputFile(resolve(dir), content, (err) => {
    if (err) console.log(err);
  });
const writeFile = (dir, content) =>
  fs.writeFile(resolve(dir), content, (err) => {
    if (err) console.log(err);
  });

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const getTplFilePath = (meta) => ({
  // docs 目录
  readme: {
    from: './.template/docs/README.md.tpl',
    to: `../../packages/${meta.compName}/docs/README.md`
  },
  basis: {
    from: './.template/docs/basis.vue.tpl',
    to: `../../packages/${meta.compName}/docs/basis.vue`
  },
  attributes: {
    from: './.template/docs/attributes.vue.tpl',
    to: `../../packages/${meta.compName}/docs/attributes.vue`
  },
  // src 目录
  vue: {
    from: './.template/index.vue.tpl',
    to: `../../packages/${meta.compName}/index.vue`
  },
  // 根目录
  install: {
    from: './.template/index.ts.tpl',
    to: `../../packages/${meta.compName}/index.ts`
  }
});

const getRouterMeta = (listFileContent) => {
  return {
    routes: listFileContent.map((comp) => {
      return `{
        title: '${comp.compZhName}',
        name: '${comp.compName}',
        path: '/components/${comp.compName}',
        component: () => import('Packages/${comp.compName}/docs/README.md'),
      }`;
    })
  };
};

const getInstallMeta = (listFileContent) => {
  const initImport = (compName) => {
    return `import { ${compName}Plugin } from './${compName}';`;
  };
  const initInstall = (compName) => {
    return `${compName}Plugin`;
  };
  const initExport = (compName) => {
    return `export * from './${compName}'`;
  };
  return {
    importPlugins: listFileContent
      .map(({ compName }) => initImport(compName))
      .join('\n'),
    installPlugins: listFileContent
      .map(({ compName }) => initInstall(compName))
      .join(','),

    exportPlugins: listFileContent
      .map(({ compName }) => initExport(compName))
      .join('\n')
  };
};

module.exports = {
  resolve,
  readJSONSync,
  readFileSync,
  outputFile,
  writeFile,
  kebabCase,
  getTplFilePath,
  getRouterMeta,
  getInstallMeta
};
