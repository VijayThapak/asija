import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormComponent } from './14May/reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './14May/template-driven-form/template-driven-form.component';
import { ListComponent } from './list/list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'product',
    component: LayoutComponent,
    children: [
      // {
      //   path: 'reactive',
      //   component: ReactiveFormComponent
      // },
      {
        path: '',
        component: ListComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      },
      {
        path: 'template',
        component: TemplateDrivenFormComponent
      }
    ]
  }
];

@NgModule({
  declarations: [LayoutComponent, ReactiveFormComponent, TemplateDrivenFormComponent, ListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Feature1Module { }
