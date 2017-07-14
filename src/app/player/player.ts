export class Player {
    public name: string;
    public balance: number;

    constructor (name: string, balance: number){
        this.name = name;
        this.balance = balance;
    }

    public deposit(amount: number){
        this.balance =+ amount;
    }

    public withdraw(amount: number){
        this.balance =- amount;
    }
}