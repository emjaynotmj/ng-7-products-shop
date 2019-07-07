import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle: string = 'Product Detail';
  product: IProduct =   {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    const productId = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` - ${productId}`;
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
