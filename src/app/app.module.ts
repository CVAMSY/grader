import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { RowComponentComponent } from './row-component/row-component.component';
import { InlineEditComponentComponent } from './inline-edit-component/inline-edit-component.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    RowComponentComponent,
    InlineEditComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
