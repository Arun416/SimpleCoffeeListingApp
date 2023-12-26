import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(public http: HttpClient) {}

  getCoffeeData() {
    return this.http.get(
      ' https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json',
    );
  }
}
