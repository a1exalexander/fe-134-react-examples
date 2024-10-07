"use strict";
class Pet {
    constructor(pet) {
        this.testPrivate = 'private value';
        this.testProtected = 'protected value';
        this.name = pet.name;
        this.color = pet.color;
        this.owner = pet.owner;
    }
    sound() {
        console.log('some sound');
    }
}
