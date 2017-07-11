import {Player} from "app/player/player";

describe("Player", () => {

    it("Name is BRIAN", ()=>{
        const player = new Player("BRIAN");
        console.log(player.getName());
        expect (player.getName()).toBe("BRIAN");
    });
});