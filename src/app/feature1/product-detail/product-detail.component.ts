import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap((paramsMap) => {
    //     console.log(paramsMap.get('id'))
    //     return paramsMap;
    //   }
    //   //  return paramsMap;
    //   )
    // )}

    console.log(this.route.snapshot.paramMap.get('id'));
  }

}
