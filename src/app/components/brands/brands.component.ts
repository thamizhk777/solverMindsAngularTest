import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  routes: any = [{label: 'List', routes: 'list'},{label: 'Pending', routes: 'pending'},{label: 'Rating', routes: 'rating'}]
  demo1TabIndex = 1;
  constructor(public  matTabsModule: MatTabsModule) { }

  ngOnInit(): void {
  }

}
