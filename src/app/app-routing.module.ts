import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandsModule } from './components/brands/brands.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductsModule } from './components/products/products.module';


const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
