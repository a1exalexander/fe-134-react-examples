"use strict";
class Cat extends Pet {
    constructor(options) {
        super(options);
    }
    sound() {
        console.log('mew');
    }
}
const myCat = new Cat({
    color: 'white',
    name: 'snow',
});
