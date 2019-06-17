import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './17June/layout/layout.component';
import { NoDataComponent } from './17June/no-data/no-data.component';
import { Page1Component } from './17June/page1/page1.component';
import { Page2Component } from './17June/page2/page2.component';
import { Page3Component } from './17June/page3/page3.component';


// const routes: Routes = [
//   {
//     path: 'layout',
//     component: LayoutComponent
//   }
// ];
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NoDataComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Feature1Module,
    // RouterModule.forRoot(routes)
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
