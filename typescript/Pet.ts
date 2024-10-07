interface IPet {
    name: string;
    color: string;
    sound: () => void;
    owner?: string;
}

class Pet implements IPet {
    name: string;
    color: string;
    owner?: string | undefined;
    private readonly testPrivate = 'private value';
    protected readonly testProtected = 'protected value';

    constructor(pet: Omit<IPet, 'sound'>) {
        this.name = pet.name;
        this.color = pet.color;
        this.owner = pet.owner;
    }

    sound() {
        console.log('some sound');
    }
}