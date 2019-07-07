import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const productId = +next.params.id;
    if (isNaN(productId) || productId < 1) {
      alert(`No Product with ID: ${productId}`);
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
