import {Player} from "app/player/player";
import {Game} from "app/game/game";

describe("Game", () => {

    it("Create a game with two players named Horse and Car", ()=>{
        let players: Player[] = [new Player("HORSE",0),new Player("CAR",0)];
        const game = new Game(players);
        
        expect (players.find(x => x.getName() === "HORSE").getName()).toBe("HORSE");
        expect (players.find(x => x.getName() === "CAR").getName()).toBe("CAR");
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

            if (players[0].getName() == "HORSE"){
                    horseFirst++;
            }   
            else if (players[0].getName() == "CAR"){
                    carFirst++;
            }   
        } 
        expect(horseFirst).toBeGreaterThan(1);
        expect(carFirst).toBeGreaterThan(1);
        expect(horseFirst + carFirst).toBe(100);
    });

    it ("Create a game and play, verify that the total rounds was 20 and that each player played 20 rounds.", ()=>{
        let players: Player[] = [new Player("HORSE",0), new Player("CAR",0),new Player("TRUCK",0)];
        const game = new Game(players);    

        for (var _i = 0; _i < 20; _i++) {       
            for (var player of game.getPlayers()){
                player.takeTurn();
            }
         } 

        for (var player of game.getPlayers()){
            expect(player.getTurns()).toBe(20);
        }
    });

    it ("Create a game and play, verify that in every round the order of the players remained the same.", ()=>{
        const game = new Game([new Player("HORSE",0), new Player("CAR",0),new Player("TRUCK",0)]);    
        let holdPlayers = Object.assign({}, game.getPlayers());

        for (var _i = 0; _i < 20; _i++) {       
            for (var player of game.getPlayers()){
                player.takeTurn();
            }
            let i : number = 0
            for (var player of game.getPlayers()){
                expect(player.getName()).toBe(holdPlayers[i].getName());
                i++;
            }
        }      
    });




});