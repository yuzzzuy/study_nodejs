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
 *        buffer的大小一旦确定，不能修改. 实质上对底层内存的直接使用
 */
let str = "Hello 孙悟空";

//将一个字符串保存到buffer中
let buf = Buffer.from(str);

console.log(buf);
console.log(buf.length); //占用内存的大小
console.log(str.length); //字符串的长度

//创建一个指定大小的buffer
//buffer 构造函数都是不推荐使用的
// let buf2 = new Buffer(1024);
// console.log(buf2)

//创建一个10个字节的buffer
let buf3 = Buffer.alloc(10);
console.log(buf3)

//通过索引，来操作buf中的元素
buf3[0] = 88 ;
buf3[1] = 255 ;
buf3[2] =  0xaa;
buf3[3] =  256;
//只要数字在控制台或页面中输出一定是十进制
console.log(buf3[2].toString(16));

for (let i = 0; i < buf3.length; i++) {
    console.log(buf3[i]);
}

//Buffer.allocUnsafe(size) 创建一个指定大小的饿buffer,但是buffer中可能含有敏感数据
let unsafe = Buffer.allocUnsafe(10);
console.log(unsafe);

/**
 * Buffer.from(str) 将一个字符转换为buffer
 * Buffer.alloc(size) 创建一个指定大小的buffer
 * Buffer.allocUnsafe(size) 创建一个指定大小的buffer 但是可能包含敏感数据
 * buf.toString() 将缓存区中的数据转换为字符串
 */
