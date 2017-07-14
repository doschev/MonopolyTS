import {Property} from "app/location/Property";
import {Player} from "app/player/player";

describe("Game Locations", () => {

    it("Create PARK PLACE", ()=>{
        const property = new Property(39, "PARK PLACE");

        expect (property.index).toBe(39);
        expect (property.name).toBe("PARK PLACE");
    });
});