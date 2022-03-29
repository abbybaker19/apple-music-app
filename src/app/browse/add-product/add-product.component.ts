import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../product-item.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'am-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public ps : ProductsService) { }

  ngOnInit(): void {
  }

  addProduct(product : ProductItemModel) {
    console.log("You clicked add product");
    console.log(product);
    this.ps.addProduct(product);
  }
}
