import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddNewProduct } from '../models/add-new-product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private httpClint : HttpClient) { }

// get All Product
  getAllProductApi(){
    return this.httpClint.get<AddNewProduct[]>(`http://localhost:3000/products`);
  }

  // Create

  create(data: AddNewProduct){
    return  this.httpClint.post(`http://localhost:3000/products`, data);
  }

  // update


  
  edit(id:number){
    return this.httpClint.get<AddNewProduct>(`http://localhost:3000/products/${id}`);
  }

  update(data: AddNewProduct){
    return this.httpClint.put<AddNewProduct>(`http://localhost:3000/products/${data.id}`, data);
  }

  
  // delete
  delete(id:number){
    return this.httpClint.delete<AddNewProduct>(`http://localhost:3000/products/${id}`);
  }

}
