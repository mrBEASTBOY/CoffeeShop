import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Coffee } from '../common/coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private baseUrl =
    'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.baseUrl).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
