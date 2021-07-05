import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['id', 'name', 'price'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe( (res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    })
  }

}

export interface Product {
  id: number;
  name: string;
  price: number;
}
