import {Player} from "app/player/player";
import {Game} from "app/game/game";

describe("Game", () => {

    it("Create a game with two players named Horse and Car", ()=>{
        let players: Player[] = [new Player("HORSE"),new Player("CAR")];
        const game = new Game(players);
        expect (game.getPlayers()[0].getName()).toBe("HORSE");
        expect (game.getPlayers()[1].getName()).toBe("CAR");
    });

    it("Try to create a game with < 2. When attempting to play the game, it will fail.", ()=>{
        let success : boolean = true;
        let players: Player[] = [];  
        for (var _i = 0; _i < 1; _i++) {
            players.push(new Player("x"));
        }
        try {
            const game = new Game(players);    
        } catch (error) {
            success = false;
        }  finally {
            expect(success).toBe(false);
        }
        
    });
        
    it("Try to create a game with >8 players. When attempting to play the game, it will fail.", ()=>{
        let success : boolean = true;
        let players: Player[] = [];  
        for (var _i = 0; _i < 9; _i++) {
            players.push(new Player("x"));
        }
        try {
            const game = new Game(players);    
        } catch (error) {
            success = false;
        } finally {
            expect(success).toBe(false);
        }
    });

    it("Try to create a game with 6 players. When attempting to play the game, it will fail.", ()=>{
        let success : boolean = true;
        let players: Player[] = [];  
        for (var _i = 0; _i < 6; _i++) {
            players.push(new Player("x"));
        }
        try {
            const game = new Game(players);    
        } catch (error) {
            success = false;
        } finally {
            expect(success).toBe(true);
        }
    });
});