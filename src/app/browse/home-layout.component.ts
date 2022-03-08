import { Component, OnInit } from '@angular/core';
import { category_list } from './category_list';
import { mock_product_list } from './mock_product_list';
import { ProductItemModel } from './product-item.model';
import { ProductsService } from './products.service';

@Component({
    selector: 'am-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit{
    products: ProductItemModel[] = [];
    category_list: any = category_list;

    constructor(private productsService:ProductsService) {

    }
    ngOnInit(): void {
        this.productsService.getProducts().subscribe(data => {
            console.log("Fetching product data");
            console.log(data);
            for (var product of data) {
                console.log(product);
                this.products.push(product);
            }
        })
    }
}