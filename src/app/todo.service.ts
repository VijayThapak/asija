import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
// @Inject('HttpClient') private http;
  private getFullUrl(url) {
    return "http://localhost:3000" + url;
  }

  getTodoList() {
    return this.http.get(this.getFullUrl('/todos'));
  }
}
