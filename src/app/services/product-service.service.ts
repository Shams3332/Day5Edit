import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private products: IProduct[] =
  [
    {
      "id":1,
        "title": "Fjallraven - Foldsack ",
        "slug": "fjallraven-foldsack-no.-1-backpack-fits-15-laptops",
        "quantity": 10,
        "price": 109.95,
        "priceAfterDiscount": 100,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "category 1",
        "imageCover": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    
    },
    {
      "id":2,
        "title": "Mens Casual T-Shirts",
        "slug": "mens-casual-premium-slim-fit-t-shirts",
        "quantity": 30,
        "price": 22.3,
        "priceAfterDiscount": 20,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "63f9f5dbae3872910f11a234",
        "imageCover": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      
    },
    {
      "id":3,
        "title": "Mens Cotton Jacket",
        "slug": "mens-cotton-jacket",
        "quantity": 20,
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "category 2",
        "imageCover": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    
    },
    {
      "id":4,
        "title": "Mens Casual Slim Fit",
        "slug": "mens-casual-slim-fit",
        "quantity": 0,
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "category 3",
        "imageCover": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      "id":5,
        "title": "John Hardy Women's Legends",
        "slug": "john-hardy-women's-legends-naga-gold-and-silver-dragon-station-chain-bracelet",
        "quantity": 0,
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "category 1",
        "imageCover": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      "id":6,
        "title": "Solid Gold Petite Micropave",
        "slug": "solid-gold-petite-micropave",
        "quantity": 75,
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "category 2",
        "imageCover": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      "id":7,
        "title": "White Gold Plated Princess",
        "slug": "white-gold-plated-princess",
        "quantity": 33,
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "category 1",
        "imageCover": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      "id":8,
        "title": "Pierced Owl Rose Gold Plated ",
        "slug": "pierced-owl-rose-gold-plated-stainless-steel-double",
        "quantity": 90,
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "category 3",
        "imageCover": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    
    },
    {
      "id":9,
        "title": "WD 2TB Elements Portable ",
        "slug": "wd-2tb-elements-portable-external-hard-drive-usb-3.0",
        "quantity": 102,
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "category 2",
        "imageCover": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",

    },
    {
      "id":10,
        "title": "SanDisk SSD PLUS 1TB Internal",
        "slug": "sandisk-ssd-plus-1tb-internal-ssd-sata-iii-6-gbs",
        "quantity": 104,
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "category 2",
        "imageCover": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  
    }
];


constructor(private http: HttpClient) {}
// getAllProductByApi(): Observable<any[]> {
//     return this.http.get<any[]>(`http://localhost:3000/products`);
//   }


  //get all product
  getAllProduct(): IProduct[] {
    return this.products;
  }

  
  // get product by id
  getProductById(prodId: number): IProduct | undefined {
    return this.products.find((product) => product.id == prodId);
  }

  
}



