import {TestDice} from "app/dice/testDice";

describe("Test Dice", () => {

    let dice: TestDice;
    
    beforeEach(() => {
       dice = new TestDice();
    });

    it("Value is 8", () => {  
        dice.load(4,4);
        const roll = dice.roll();
        expect(roll).toBe(8);
    });

    it("Value is 12", () => {
        dice.load(6,6);   
        const roll = dice.roll();
        expect(roll).toBe(12);
    });
});