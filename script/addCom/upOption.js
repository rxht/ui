const handlebars = require('handlebars');
const {
  readFileSync,
  outputFile,
  writeFile,
  getTplFilePath,
  getRouterMeta,
  getInstallMeta
} = require('./utils');

const {
  listFilePath,
  routerFileFrom,
  routerFileTo,
  installFileFrom,
  installFileTo
} = require('./consts');

/**
 * @function 根据配置信息新增文件
 * @param {*} meta
 */
const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta);
  Object.keys(filePaths).forEach((key) => {
    const fileTpl = readFileSync(filePaths[key].from);
    const fileContent = handlebars.compile(fileTpl)(meta);
    outputFile(filePaths[key].to, fileContent);
  });
};

/**
 * @function 读取packages/list.json并更新
 * @param {*} meta
 * @returns
 */
const listJsonTplReplacer = (meta) => {
  const listFileTpl = readFileSync(listFilePath);
  const listFileContent = JSON.parse(listFileTpl);
  listFileContent.push(meta);
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2);
  writeFile(listFilePath, newListFileContentFile);
  return listFileContent;
};

/**
 * @function 更新router.ts
 * @param {*} listFileContent
 */
const routerTplReplacer = (listFileContent) => {
  const fromContent = readFileSync(routerFileFrom);
  const metaContent = getRouterMeta(listFileContent);
  const toContent = handlebars.compile(fromContent, {
    noEscape: true
  })(metaContent);
  outputFile(routerFileTo, toContent);
};

/**
 * @function 更新Packages/install.ts
 * @param {*} listFileContent
 */
const installTsTplReplacer = (listFileContent) => {
  const fromContent = readFileSync(installFileFrom);
  const metaContent = getInstallMeta(listFileContent);
  const toContent = handlebars.compile(fromContent, {
    noEscape: true
  })(metaContent);
  outputFile(installFileTo, toContent);
};

module.exports = (meta) => {
  compFilesTplReplacer(meta);
  const listFileContent = listJsonTplReplacer(meta);
  routerTplReplacer(listFileContent);
  installTsTplReplacer(listFileContent);

  console.log(`组件新建完毕，请前往 packages/${meta.compName} 目录进行开发`);
};
