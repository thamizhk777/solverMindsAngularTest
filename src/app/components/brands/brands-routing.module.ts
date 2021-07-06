import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandPendingComponent } from './brand-pending/brand-pending.component';
import { BrandRatingComponent } from './brand-rating/brand-rating.component';
import { BrandsComponent } from './brands.component';


const routes: Routes = [
  {
    path: '',
    component: BrandsComponent
  },
  {
    path: 'list',
    component: BrandListComponent
  },
  {
    path: 'pending',
    component: BrandPendingComponent
  },
  {
    path: 'rating',
    component: BrandRatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
