import { Component, OnInit } from '@angular/core';
import { productService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  // products: any = [1, 2, 3, 4]
  products: any;
  
  constructor(
    private productService: productService
  ) {}

  ngOnInit(): void {

    const productsObervable = this.productService.getProducts()
    productsObervable.subscribe({
      next: (data) => {this.products = data},
      error: (err) => {console.error('something wrong occurred: ' + err)},
      complete: () => {console.log('done')},
    });

  }

}
