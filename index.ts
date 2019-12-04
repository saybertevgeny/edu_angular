interface SayHello {
    sayHello: () => void
}

class User implements SayHello{
    constructor(protected name: string, private age: number) {}

    sayHello(): void{
        console.log(this.name + ' hello!');
    }

}