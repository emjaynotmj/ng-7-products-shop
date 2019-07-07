import { IProduct } from './product';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';

  showImage: boolean = false;

  _listFilter: string;

  filteredProducts: IProduct[];

  products: IProduct[] = [];

  errMessage: string;

  constructor(private productService: ProductService) {

  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterTerm: string): IProduct[] {
    filterTerm = filterTerm.toLocaleLowerCase()
    return this.products.filter(product => product.productName.toLocaleLowerCase().indexOf(filterTerm) !== -1)
  }

  onRatingClicked(msg: string): void {
    this.title = `Product List - ${msg}`;
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  };

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      err => this.errMessage = <string>err
    )
  }
}
