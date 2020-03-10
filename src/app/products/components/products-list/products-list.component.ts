import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: []
})
export class ProductsListComponent implements OnInit {

  productsList: any[];

  constructor( private productService: ProductsService) { }

  ngOnInit() {
    this.productsList = this.productService.getProductList();
    console.log(this.productsList);
  }

}
