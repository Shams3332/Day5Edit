import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Store } from '../../models/store';
import { IProduct } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { RoundedborderDirective } from '../../directives/roundedborder.directive';
import { CommonModule, NgIf } from '@angular/common';
import { CreditCartPipe } from '../pipes/credit-cart.pipe';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ FormsModule , RoundedborderDirective, NgIf, CommonModule 
    ,CreditCartPipe, RouterModule],
templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{


store1:Store= new Store ('My Store',['Beni-suef', 'Cairo'], 'assets/asset 6.jpeg')
  
// task day3

myShadow='5px 5px 10px yellow';

birthDay=new Date()
creditCart: string ='1324567853456096'

// child custom event
@Output() addchildEvent:EventEmitter<IProduct>=new EventEmitter<IProduct>();
  cart: any;

addToCart(product:IProduct){
  console.log(product)
  this.addchildEvent.emit(product)
  
}

// end day 3


  
    toggleImg() {
      console.log('inside toggle image');
      this.showImage = !this.showImage;
    }
  
  
    showImage: boolean = true;
    ClientName: string ='shams'
  
  
  
    // Task Day 4

    products:IProduct[]=[];
    constructor(private productServ: ProductServiceService){}
      
    ngOnInit(): void {
    
    this.products=this.productServ.getAllProduct()

    // this.productServ.getAllProductByApi().subscribe({
    //   next:(data)=>{
    //     console.log(data);
    //   }
    // })

      this.filterproduct = this.products;
    }
  

// end Day 4
    filterproduct: IProduct[] = [];
    selectedCategory: string = '';
  
    @Input() set filterproducts(value: string) {
      this.filterproduct = this.filterselectedproduct(value);
    }
  
    filterselectedproduct(value: string): IProduct[] {
      return value === '' ? this.products : this.products.filter((product: IProduct) => product.category === value);
    }
    
  // quantity 
  decreaseQuantity(product: IProduct) {
    if (product.quantity > 0) {
      product.quantity--;
  
      if (product.quantity === 0) {
        this.filterproduct = this.filterproduct.filter(p => p.id !== product.id);
      }
    }
  }
  

}
