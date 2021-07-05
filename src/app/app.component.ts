import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mode = 'side'
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;
  title = 'SolverMinds Angular Test';
  curentTab = 'products';
  
  routes =  [
    { path: 'products', label: 'Products' },
    { path: 'brands', label: 'Brands' }
   ];

  constructor(private router: Router){
    this.curentTab  = this.routes[0].path;
    this.router.navigate([this.routes[0].path]);
  }

  changeTab(tab){
    this.curentTab  = tab;
    this.router.navigate([tab]);
  }

}
