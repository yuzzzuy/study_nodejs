/**
 * Buffer （缓冲区）
 *      - Buffer 的结构和数组很像,操作的方法也和数组类似
 *      - 数组中不能存储二进制的文件,而Buffer就是专门用来存储二进制数据
 *      - 使用buffer不需要引入模块,直接使用
 *      - 在buffer中存储的都是二进制数据，但是在显示的时候都是以16进制的形式显示
 *        buffer中每一个元素的范围都是从 00-ff   0 - 255
 *        00000000 - 11111111
 *
 *        计算机中 一个0或一个1 我们成为1位（bit）
 *        8bit = 1byte(字节)
 *        1024byte = 1kb
 *        1024kb = 1mb
 *        1024mb = 1g
 *        1024g = 1t
 *        1024t = 1b
 *
 *        buffer 中的一个元素，占用内存的一个字节
 */
let str = "Hello 孙悟空";

//将一个字符串保存到buffer中
let buf = Buffer.from(str);

console.log(buf);
console.log(buf.length); //占用内存的大小
console.log(str.length); //字符串的长度



