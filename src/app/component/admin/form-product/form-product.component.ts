import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../../../services/add-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddNewProduct } from '../../../models/add-new-product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [FormsModule , CommonModule],
templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.scss'
})
export class FormProductComponent implements OnInit {

constructor(private productService:AddProductService , private router:Router,private route: ActivatedRoute){}

    formdata : AddNewProduct ={
      id:0,
      name:'',
      price:0,
      category:'',
      quantity:0

    }

    create(){

      this.productService.create(this.formdata).subscribe({
        next:(data)=>{
          this.router.navigate(['admin','addProduct']);
        },
        error:(error)=>{
          console.log(error)
        }
      })
      
    }


    //  #############################################  Update



    ngOnInit(): void {
      this.route.paramMap.subscribe((param )=>{
        let id =Number(param.get('id'));
        this.getById(id)
     
      })
    }

    getById(id:number){
      this.productService.edit(id).subscribe((data)=>{
        this.formdata = data;
     
      })
    }
    

    update() {
      this.productService.update(this.formdata).subscribe({
        next: (data) => {
          this.router.navigate(['admin', 'addProduct']); 
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  
}

