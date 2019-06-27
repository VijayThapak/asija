import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { from, Observable } from 'rxjs';

export class DataResolverService implements Resolve<Observable<any>> {

  constructor() { }

  resolve() {
    // this.http.getUsers
    return from([{'username': "Vijay Thapak"}]);
  }
}
