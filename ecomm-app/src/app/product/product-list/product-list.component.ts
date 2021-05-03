
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() products : Product[] =[]
  @Input() title: string = '';
  @Output() selectProduct = new EventEmitter<Product>();

  productSum = 0;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
   if(changes.products){
     this.productSum = changes.products.currentValue.map((product: Product)=> product.price).reduce((a: number,b:number)=> a+b);
   }
  }
  ngOnInit(): void {
  }
  select(product: Product) {
    console.log(product);
    this.selectProduct.emit(product);
  }
}
