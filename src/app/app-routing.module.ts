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
    // loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'brands',
    component: BrandsComponent
    // loadChildren: () => import('./components/brands/brands.module').then(m => m.BrandsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
