// exports.name = "孙悟空";
// exports.age = 18;
// exports.sayName = function () {
//     console.log("我是孙悟空！！！");
// }

/**
 * exports 和 module.exports
 *  -- 通过exports只能使用.的方式向外部暴露
 *      exports.xxx = xxx;
 *  -- module.exports既可以用.的方式，也可以直接赋值
 *      module.exports.xxx = xxx;
 *      module.exports = { }
 */


module.exports = {
    name : "孙悟空",
    age : 18,
    sayName : function () {
        console.log("我是孙悟空！！！");
    }
}