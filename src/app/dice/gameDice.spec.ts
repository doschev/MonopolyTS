import {GameDice} from "app/dice/gameDice";

describe("Game Dice", () => {
    it("max value is 12", () => {
        const dice = new GameDice();

        for (let i = 0; i < 1000; i++) {
            const roll = dice.roll();
            expect(roll).toBeLessThanOrEqual(12);
        }
    });

    it("min value is 2", () => {
        const dice = new GameDice();

        for (let i = 0; i < 1000; i++) {
            const roll = dice.roll();
            expect(roll).toBeGreaterThanOrEqual(2);
        }
    });
});