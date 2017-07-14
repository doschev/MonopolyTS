export abstract class Location {
    public index: number;
    public name: string;

    constructor (index: number, name: string){
        this.index = index;
        this.name = name;
    }
}