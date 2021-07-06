import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandPendingComponent } from './brand-pending/brand-pending.component';
import { BrandRatingComponent } from './brand-rating/brand-rating.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [BrandsComponent, BrandListComponent, BrandPendingComponent, BrandRatingComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    MaterialModule
  ]
})
export class BrandsModule { }
