/**
 * 简单文件写入
 * fs.writeFile(file,data[,options],callback)
 * fs.writeFileSync(file,data[,options])
 *  - file 要操作的文件的路径
 *  - data 要写入的文件
 *  - options 选项，可以写入进行一些设置
 *  - callback 回调函数
 *
 *  -flag
 *    -r 只读
 *    -w 只写
 *    -a 追加
 *
 */
//引入fs
const fs = require('fs');

fs.writeFile("hello3.txt","这是写入内容！",{flag:"a"},function (err) {
    if (!err){
        console.log("写入成功");
    }else{
        console.log(err);
    }
})