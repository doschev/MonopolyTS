import {Player} from "app/player/player";

export class Game {

    private players: Player[];

    constructor (players: Player[]){
        var shuffle = require('shuffle-array');
        shuffle(players);

        this.players = players;
        if (players.length < 2 || players.length > 8){
            throw "Incorrect Number of Players";
        }
    }

    public getPlayers(){
        return this.players;
    }
}