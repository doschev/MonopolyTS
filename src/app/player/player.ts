export class Player {
    private name: string;

    constructor (name: string){
        this.name = name;
    }

    public getName(){
        return this.name;
    }
}