/**
 * 模块化
 * 在NodeJS中，一个js文件就是一个模块
 * 在node中，每一个js文件中的js代码都是独立运行在一个函数中
 * 在node中，通过require（）来引入外部的模块
 * 这里的路径必须使用相对路径
 *
 * 使用require（）引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块
 *
 * 使用require() 引入外部模块时，使用的就是模块标识
 * 模块分为两大类
 * -核心模块
 * --核心模块的标识就是模块的名字
 * -文件模块
 * --由用户自己创建的模块
 * --文件模块的标识就是文件的路径（绝对路径，相对路径）
 * ---相对路径由 ./ 或 ../  开头
 */
const hello= require("./hello");
console.log(hello)

const math = require('./math')
console.log(math.add(123,3245))