// 函数没有返回值，得到的是undefined.
// 函数接收的参数没有传递得到的是undefined.
// 解构赋值没有相对应的项，得到的也是undefined.
// 对象没有相对应的属性，得到的还是undefined.
function fn(a) {
    return function (b) {
          console.log(a+b);
    }
}
fn(1)(2);
console.log(1111111);