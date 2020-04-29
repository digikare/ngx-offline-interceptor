import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-offline-interceptor';
  user$;

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh(){
    this.user$ = this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
}
