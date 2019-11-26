const obj = {
    userName:"laotie"
}
function fn() {
    a = 12;
    console.log(this.userName,a);
}
// fn.call(obj);
// console.log(a);
// fn.bind(obj)();
const myFn = fn.bind(obj);
myFn();