export interface IProduct {
    id:number,
    title:string,
    slug:string,
    quantity:number,
    price:number,
    category:string,
    description:string,
    imageCover:string,
    priceAfterDiscount?:number
}

