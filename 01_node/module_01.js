var a = 10;

/**
 * 在node执行模块中的代码的，它会首先在代码最顶部，添加如下代码
 *    function(exports,require,module,_filename,_dirname){
 *
 *   在代码最底部添加
 *    }
 * 实质：node代码都是包装在一个方法中执行，并且在函数执行中，同时传递进了5个实参
 * exports: 该对象用来将变量或函数暴露到外部
 * require: 函数，用来引入外部模块
 * module: module代表的就是模块本身  exports就是module的属性 既可以使用 exports导出，也可以使用module.exports导出
 * _filename: 当前模块文件的完整路径
 * _dirname:  当前模块所在文件夹的完整路径
 *
 * 在node中又一个全局对象 global，它的作用和网页中window类似
 *   在全局中创建的变量都会作为global的属性保存
 *   在全局中创建的函数都会作为global的方法保存
 */
/*
console.log(global)global
*/

/**
 * arguments.callee
 *   -- 这个属性保存的是当前执行的函数对象
 */
console.log(arguments.length)