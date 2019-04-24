import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpComponent } from './emp/emp.component';
import { EventsComponent } from './19April/events/events.component';
import { NgForComponent } from './23April/ng-for/ng-for.component';
import { AttDirComponent } from './23April/att-dir/att-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    EmpDetailsComponent,
    EmpComponent,
    EventsComponent,
    NgForComponent,
    AttDirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
