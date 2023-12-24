const getMeta = require('./addCom/getMeta');
const upOption = require('./addCom/upOption');

async function run() {
  const meta = await getMeta();
  upOption(meta);
}

run();
