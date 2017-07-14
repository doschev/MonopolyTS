import {Player} from "app/player/player";
import {TestDice} from "app/dice/testDice";

describe("Player", () => {
   const player = new Player("Player",1000);

    it("Player: create with $1000", ()=>{ 
        expect (player.getName()).toBe("Player");
        expect (player.getBalance()).toBe(1000);  
    });

    it("Player: deposit $500", ()=>{
        player.deposit(500);
        expect (player.getBalance()).toBe(1500);
    });

    it("Player: withdraw $750", ()=>{
        player.withdraw(750);
        expect (player.getBalance()).toBe(750);
    });

    it("Player on beginning location (numbered 0), rolls 7, ends up on location 7", ()=>{
        player.setLocation(0);
        const testDice = new TestDice();
        testDice.load(3, 4);
        player.move(testDice.roll());
        expect (player.getLocation()).toBe(7);
    });
    
    it("Player on location numbered 39, rolls 6, ends up on location 5", ()=>{
        player.setLocation(39);
        const testDice = new TestDice();
        testDice.load(3,3);
        player.move(testDice.roll());
        expect (player.getLocation()).toBe(5);
    });
    
});