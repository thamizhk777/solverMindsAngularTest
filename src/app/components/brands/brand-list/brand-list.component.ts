import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  @Input('showList') showList;

  constructor() { }

  ngOnInit(): void {
  }

}
