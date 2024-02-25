import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../../../services/add-product.service';
import { Router, RouterModule } from '@angular/router';
import { AddNewProduct } from '../../../models/add-new-product';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.scss'
})
export class AllproductComponent implements OnInit {

  
  constructor(private router: Router , private productServices :AddProductService) {}


allProduct : AddNewProduct[]=[]


ngOnInit(): void {
  
  this.productServices.getAllProductApi().subscribe((data) =>{

    this.allProduct=data;

  })
}

navigateTForm() {
  this.router.navigate(['admin', 'formProduct']); 
}


// delete 

deleteItem(id: number) {
  this.productServices.delete(id).subscribe({
    next: (data) => {
      this.allProduct = this.allProduct.filter(item => item.id !== id);
    },
    error: (error) => {
      console.error('Error deleting product:', error)
    }
  });
}



}
