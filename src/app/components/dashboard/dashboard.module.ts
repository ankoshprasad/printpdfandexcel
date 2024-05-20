import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {  MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { SearchFilterPipe } from "../../pipe/search-filter.pipe";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { LoaderModule } from '../../components/loader/loader.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchFilterPipe,
   
  ],
  imports: [
    LoaderModule,
   
    CommonModule, 
    DashboardRoutingModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSortModule
  ],
  providers: [
    { 
    provide: MatDialogRef,
    useValue: []
     }
    ],
})
export class DashboardModule { }
