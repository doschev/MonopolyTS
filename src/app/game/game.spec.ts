import {Player} from "app/player/player";
import {Game} from "app/game/game";

describe("Game", () => {

    it("Create a game with two players named Horse and Car", ()=>{
        let players: Player[] = [new Player("HORSE",0),new Player("CAR",0)];
        const game = new Game(players);
        
        expect (players.find(x => x.name === "HORSE").name).toBe("HORSE");
        expect (players.find(x => x.name === "CAR").name).toBe("CAR");
    });

    it("Try to create a game with < 2. When attempting to play the game, it will fail.", ()=>{
        let success : boolean = true;
        let players: Player[] = [];  
        for (var _i = 0; _i < 1; _i++) {
            players.push(new Player(_i.toString(),0));
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
             players.push(new Player(_i.toString(),0));
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
             players.push(new Player(_i.toString(),0));
        }
        try {
            const game = new Game(players);    
        } catch (error) {
            success = false;
        } finally {
            expect(success).toBe(true);
        }
    });

    it ("Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [car, horse] occur.", ()=>{
        let horseFirst: number = 0;
        let carFirst: number = 0;
        let players: Player[] = [new Player("HORSE",0), new Player("CAR",0)];

        for (var _i = 0; _i < 100; _i++) {       
            const game = new Game(players);    

            if (players[0].name == "HORSE"){
                    horseFirst++;
            }   
            else if (players[0].name == "CAR"){
                    carFirst++;
            }   
        } 
        expect(horseFirst).toBeGreaterThan(1);
        expect(carFirst).toBeGreaterThan(1);
        expect(horseFirst + carFirst).toBe(100);
    });
});