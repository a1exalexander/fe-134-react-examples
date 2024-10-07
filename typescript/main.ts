type Nullable<T> = T | null; 

let userName: Nullable<string> = null;

userName = 'Sashko';

const API_URL = 'https://api.mysite.com';

interface IUser<T = string> {
    id: T;
    firstName: Nullable<string>;
    lastName: Nullable<string>;
    age?: Nullable<number>;
    birthDate?: Nullable<Date>;
}

const user: IUser<number> = {
    id: 2,
    firstName: 'John',
    lastName: 'Wick',
}

const getUser = (override?: Partial<IUser>): IUser => {
    return {
        ...user,
        ...override,
    } as IUser;
}

const user2 = getUser();

const arrayOfStrings: string[] = ['2', 'text'];
const arrayOfNumbers: number[] = [2, 123, 343];
const arrayOfStrignAndNumbers: (string | number)[] = [1, '2'];
const arrayOfUsers: IUser[] = [];

type Status = 'opened' | 'closed';

const vacancyStatus: Status = 'opened';

const changeVacancyStatus = (id: string, status: Status) => {
    console.log('done');
}

changeVacancyStatus('321', 'opened');


