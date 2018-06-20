'use strict';

class Human {
    // ...
}

const Fighter = Sup => class extends Sup {
    hit() {
        console.log('Hit with fist!');
    }
};

const Armed = Sup => class extends Sup {
    hitWithTaser() {
        console.log('Tshhhhhh!');
    }
};

class Hero extends Armed(Fighter(Human)) {
    constructor (name) {
        super(name);
    }
    greet() {
        console.log('So, you want to play?');
    }
}

let kickAss = new Hero('Das');

kickAss.greet();
kickAss.hit();
kickAss.hitWithTaser();