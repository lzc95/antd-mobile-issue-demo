const path = require('path');

module.exports = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
    path.resolve(__dirname, '../app/common/svg'),  // 2. 自己私人的 svg 存放目录
];



