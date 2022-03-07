import { Component, Input } from "@angular/core";
@Component ({
    selector: "am-horizontal-card",
    templateUrl: "horizontal.card.component.html",
    styleUrls: ["horizontal.card.component.css",]
})

export class HorizontalCardComponent {
    @Input() img: string;
    @Input() title: string;
    @Input() description: string;

    constructor() {
        this.img = ""
        this.title = "Title"
        this.description = "Description"
    }
}