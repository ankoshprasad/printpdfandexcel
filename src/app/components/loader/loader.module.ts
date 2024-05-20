import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';


@NgModule({
  declarations: [
    LoaderModule.rootComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderModule.rootComponent],
 entryComponents: [LoaderModule.rootComponent],
})
export class LoaderModule {
    static rootComponent = LoaderComponent
 }



