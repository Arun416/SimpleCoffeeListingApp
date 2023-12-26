import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {
  coffeeLists: any;
  isAvailableCoffee: any;
  constructor(private service: CoffeeService) {}

  ngOnInit(): void {
    this.service.getCoffeeData().subscribe((res: any) => {
      console.log(res);
      this.coffeeLists = res;
      this.isAvailableCoffee = res.filter((x: any) => x.available == true);
    });
  }
}
