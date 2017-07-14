import {Player} from "app/player/player";

describe("Player", () => {

    it("Name is TOPHAT", ()=>{
        const player = new Player("TOPHAT",0);
        expect (player.name).toBe("TOPHAT");
    });
});