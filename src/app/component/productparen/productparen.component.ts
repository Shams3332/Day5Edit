import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { NgIf } from '@angular/common';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-productparen',
  standalone: true,
  imports: [FormsModule , ProductComponent , NgIf],
  templateUrl: './productparen.component.html',
  styleUrl: './productparen.component.scss'
})
export class ProductparenComponent {
  filterproduct:string=''
  selectedCategory:string=''

  cart:IProduct[]=[]

  getCartItem(receivedProduct: IProduct) {
    // Check if the product is already in the cart
    const existingProduct = this.cart.find(p => p.id === receivedProduct.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...receivedProduct, quantity: 1 });
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }


}
