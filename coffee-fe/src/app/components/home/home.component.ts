import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/common/coffee';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  coffees: Coffee[] = [];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.handleCoffees();
  }

  handleCoffees() {
    this.coffeeService.getCoffees().subscribe((data) => {
      this.coffees = data;
      console.log(this.coffees);
    });
  }
}
