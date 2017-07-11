import {Player} from "app/player/player";

describe("Player", () => {

    it("Name is TOPHAT", ()=>{
        const player = new Player("TOPHAT");
        expect (player.getName()).toBe("TOPHAT");
    });
});