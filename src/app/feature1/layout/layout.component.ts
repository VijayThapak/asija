import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  title: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.title = this.route.snapshot.data.uname.username;

    // this.route.params.subscribe(data => {
    //   console.log(data);
    // })
  }

}
