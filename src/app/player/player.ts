export class Player {
    private name: string;
    private balance: number;
    private location: number;
    private turns: number;

    constructor (name: string, balance: number){
        this.name = name;
        this.balance = balance;
        this.location = 0;
        this.turns = 0;
    }

    public getName(){
        return this.name;
    }

    public getBalance(){
        return this.balance;
    }
    
    public setLocation(location: number){
        this.location = location;
    }  

    public getLocation(){
        return this.location;
    }

    public getTurns(){
        return this.turns;
    }

    public takeTurn(){
        this.turns += 1;
    }

    public move(value : number){
        this.location += value;
        this.location = this.location % 40;
    }
    
    public deposit(amount: number){
        this.balance += amount;
    }

    public withdraw(amount: number){
        this.balance -= amount;
    }
}