import {iLocation} from "app/location/iLocation";
import {Location} from "app/location/location";
import {Player} from "app/player/player";

export class Property extends Location implements iLocation{
    public land(player: Player){
    }
};