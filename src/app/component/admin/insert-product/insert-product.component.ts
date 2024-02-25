import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.scss']
})
export class InsertProductComponent {

  constructor(private router: Router) {}

  navigateToAddProduct() {
    this.router.navigate(['admin', 'addProduct']);
  }
}
