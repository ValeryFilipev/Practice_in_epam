'use strict';

class Me {

    constructor(name) {
        this.name = name;
    }

    sayHi() {//locate in the prototype
        alert(this.name);
    }

}

let user = new Me("Valery");//constructor will work only after this string;
user.sayHi();//the method store in the prototype