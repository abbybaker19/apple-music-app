import { Component } from '@angular/core';
import { category_list } from './category_list';
import { mock_product_list } from './mock_product_list';
import { ProductItemModel } from './product-item.model';

@Component({
    selector: 'am-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent {
    products: ProductItemModel[] = [];
    category_list: any = category_list;

    constructor() {

        for (var product of mock_product_list) {
            console.log(product);
            this.products.push(product);
        }

        this.category_list = category_list;
    }
}