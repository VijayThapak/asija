import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './17June/layout/layout.component';
import { NoDataComponent } from './17June/no-data/no-data.component';
import { Page1Component } from './17June/page1/page1.component';
import { Page2Component } from './17June/page2/page2.component';
import { Page3Component } from './17June/page3/page3.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'page3',
    component: Page3Component
  },
  {
    path: '',
    redirectTo: '/layout',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
