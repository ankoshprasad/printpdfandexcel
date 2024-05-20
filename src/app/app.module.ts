import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { LoaderModule } from './components/loader/loader.module';
import { ExcelService } from './service/excel.service';
// search module

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  
  imports: [
    LoaderModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSortModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ExcelService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
