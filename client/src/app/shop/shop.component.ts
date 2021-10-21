import { Component, OnInit } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((response) => {
      console.log("count"+response.count);
      this.products = response.data;
      
    }, error => {
      console.log("wow"+error);
    })
  }

 /* getProducts() {
    this.shopService.getProducts().subscribe((response:IPagination) => {
      this.products = response.data;
      
    }, error => {
      console.log(error);
    })
  }*/

}
