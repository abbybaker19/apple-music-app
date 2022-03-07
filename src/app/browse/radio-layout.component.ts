import { Component } from "@angular/core";
import { mock_station_list } from "./mock_station_list";
import { StationItemModel } from "./station-item.model";
import { station_list } from "./station_list";

@Component({
    selector: 'am-radio-layout',
    templateUrl: 'radio-layout.component.html',
    styleUrls: ['radio-layout.component.css']
})

export class RadioComponent {
    stations: StationItemModel[] = [];
    station_list: any = station_list;

    constructor() {

        for (var station of mock_station_list) {
            console.log(station);
            this.stations.push(station);
        }

        this.station_list = station_list;
    }
}