import { Component, Input } from "@angular/core";
@Component ({
    selector: "am-vertical-card",
    templateUrl: "vertical.card.component.html",
    styleUrls: ["vertical.card.component.css",]
})

export class VerticalCardComponent {
    @Input() img: string;
    @Input() title: string;
    @Input() description: string;

    constructor() {
        this.img = ""
        this.title = "Title"
        this.description = "Description"
    }
}