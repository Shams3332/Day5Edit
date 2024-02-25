import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { IProduct } from '../../models/product';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  singleProduct!: IProduct;
  prodService: any;

  constructor(private productSer: ProductServiceService ,private route:ActivatedRoute , private router: Router) {}

  ngOnInit(): void {
    let prodId=Number(this.route.snapshot.paramMap.get('id'))
    this.singleProduct = this.productSer.getProductById(prodId)!;
    console.log(this.singleProduct);
    
  }

  goToProducts() {
          this.router.navigate(['/products']);
        }

}

// constructor(private router: Router) { }

//   goToProducts() {
//     this.router.navigate(['/products']);
//   }