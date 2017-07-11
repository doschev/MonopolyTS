import {Dice} from "app/dice/dice";

export class TestDice implements Dice {
    public rollOne: number;
    public rollTwo: number;

    public roll(): number {
        return this.rollOne + this.rollTwo;
    }

    public load(rollOne: number, rollTwo: number): void {
        this.rollOne = rollOne;
        this.rollTwo = rollTwo;
    }
}