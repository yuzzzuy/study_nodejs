/**
 * 文件系统(File System)
 *          - 文件系统简单的来说就是通过Node来操作系统文件
 *          - 使用文件系统，首先要引入fs模块,fs是核心模块,需要引用，不需要下载
 *
 *  文件的写入
 *      --手动操作的步骤
 *          1.打开文件
 *              fs.openSync(path,flags,[,mode])
 *                  - path 要打开文件的路径
 *                  - flags 打开文件要做的操作的类型
 *                         r 只读的
 *                         w 可写的
 *                  - mode 设置文件的操作权限 一般不传
 *
 *                返回值：
 *                - 该方法会返回一个文件的描述符作为结果，我们可以根据描述符对文件进行各种操作
 *          2.向文件中写入内容
 *              fs.writeSync(fd, string[,position[,encoding]])
 *              - fd 文件的描述符
 *              - string 写入的内容
 *              - position 写入起始位置
 *              - encoding 编码
 *          3.保存并关闭文件
 *              fs.close(fd)
 *
 */

const fs = require('fs');

//打开文件
let fd = fs.openSync("hello.txt","w");

//写入内容
fs.writeSync(fd,"今天天气不错！",2);

//关闭文件

fs.closeSync(fd);