'use strict';

let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});

let p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
});

let p5 = new Promise((resolve, reject) => {
    reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(value => {
    console.log(value);
}, reason => {
    console.log(reason);
});
//если у вас есть несколько обещаний, которые будут выполнены с задержкой и одно,
// которое будет отклонено немедленно - тогда Promise.all будет немедленно отклонен.