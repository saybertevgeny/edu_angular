interface UserInterface {
    name: string,
    age: number,
    logInfo: () => void,
    id?: any
}

const user: UserInterface = {
    name: 'Vladlien',
    age: 25,
    logInfo() {
        console.log(this.name + ' ' + this.age);
    }
};