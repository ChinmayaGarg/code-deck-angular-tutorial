import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';

@Component({
  selector: 'app-home', // name of the component, this is the name we use to call our home component Eg: <app-home></app-home>
  standalone: true,
  imports: [],
  templateUrl: './home.component.html', // html file
  styleUrl: './home.component.scss', // style file for this component only
})
export class HomeComponent {
  constructor(private productService: ProductsService) {}

  // getProducts returns Observable and then we are subscribing to that Observable using ".subscribe". Once that subscription goes through we are logging the products.
  ngOnInit() {
    this.productService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        console.log(products);
      });
  }
}
