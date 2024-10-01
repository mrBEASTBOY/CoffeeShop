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
  filteredCoffees: Coffee[] = [];
  isProducts: boolean = true;
  isAvailable: boolean = false;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.handleCoffees();
  }

  handleCoffees() {
    this.coffeeService.getCoffees().subscribe((data) => {
      this.coffees = data;
      this.filteredCoffees = this.coffees;
    });
  }

  showAllProducts() {
    this.isProducts = true;
    this.isAvailable = false;
    this.filteredCoffees = this.coffees;
  }

  showAllAvailable() {
    this.isProducts = false;
    this.isAvailable = true;
    this.filteredCoffees = this.coffees.filter((coffee) => coffee.available);
  }
}
