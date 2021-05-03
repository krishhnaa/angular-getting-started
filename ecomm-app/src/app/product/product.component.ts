
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({

  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title = 'Product Information';

  productName = 'Apple';
  visible= false;

  hidden = true;

  selectedProduct: Partial<Product> = {}
  productList : Product[] =[]
  // products : Product[] =[
  //   {id: 1, name: 'Iphone X', mfd: new Date('1-Jan-2020'), price: 500000},
  //   {id: 1, name: 'Samsung X', mfd: new Date('1-Jan-2020'), price: 500000},
  //   {id: 1, name: 'Google', mfd: new Date('1-Jan-2020'), price: 500000}
  // ]
  constructor() {

  }

  ngOnInit(): void {
    this.productList = [
      {id: 1, name: 'Iphone X', mfd: new Date('1-Jan-2020'), price: 500000},
      {id: 2, name: 'Samsung X', mfd: new Date('1-Jan-2020'), price: 500000},
       {id: 3, name: 'Google', mfd: new Date('1-Jan-2020'), price: 500000}
    ]
  }
  toggle() {
    this.visible = !this.visible;
  }
toggleTable() {
  this.hidden = !this.hidden;
}
loadProduct() {

}

trackById(i: number, data: Product) {
  return data.id;
}
addProduct() {
  if(this.productList.length){
   this.productList = [...this.productList, {id:4, name: 'Pi',mfd: new Date('1-Jan-2020'), price: 500000 }]

  }

}
deleteProduct(product: Product){
this.selectedProduct = product;
}
}
