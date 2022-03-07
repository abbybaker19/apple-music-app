import { Component } from '@angular/core';
import { mock_product_list } from './browse/mock_product_list';
import { ProductItemModel } from './browse/product-item.model';
import { category_list } from './browse/category_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apple-music-app';
}
