import { Component, OnInit } from '@angular/core';

interface Product{
  id: string;
  product_name: string;
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
products: Product[] =[{
  id: '1',
  product_name: "Product 01"
},
{
  id: '2',
  product_name: "Product 02"
}];

  constructor() { }

  ngOnInit() {
  }

}
