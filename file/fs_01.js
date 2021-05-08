/**
 * 异步写入文件
 * fs.open(path.flags[,mode],callback)
 *  -用来打开一个文件
 *  -异步调用的方法，结果都是通过回调函数的参数返回的
 *  -- 回调函数两个参数：
 *      -err 错误对象，如果没有错误则为null
 *      -fd 文件描述符
 * fs.write(fd,string[,position[,position[,encoding]],callback)
 * - 用来异步写入文件
 *
 * fs.close(fd,callback)
 * - 用来关闭文件
 *
 *
 */

//引入fs模块
const fs = require('fs');

//打开文件
fs.open("hello2.txt","w",function (err, fd) {
    if (!err){
        //如果没有出错，则对文件进行写入操作
        fs.write(fd, "这是写入的内容！",function(err){
            if (!err){
                console.log("写入成功");
            }
            //关闭文件
            fs.close(fd,function (err) {
                if (!err){
                    console.log("关闭文件");
                }
            });
        });
    }else {
        console.log(err);
    }
});

