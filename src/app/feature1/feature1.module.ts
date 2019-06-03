import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormComponent } from './14May/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LayoutComponent]
})
export class Feature1Module { }
