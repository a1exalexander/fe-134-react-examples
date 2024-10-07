class Cat extends Pet implements IPet {
    constructor(options: Omit<IPet, 'sound'>) {
        super(options)
    }

    sound() {
        console.log('mew');
    }
}

const myCat = new Cat({
    color: 'white',
    name: 'snow',
})
