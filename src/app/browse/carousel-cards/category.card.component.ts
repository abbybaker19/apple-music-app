import { Component, Input } from "@angular/core";
@Component ({
    selector: "am-category-card",
    templateUrl: "category.card.component.html",
    styleUrls: ["category.card.component.css",]
})

export class CategoryCardComponent {
    @Input() title: string;

    constructor() {
        this.title = "Title";
    }
}