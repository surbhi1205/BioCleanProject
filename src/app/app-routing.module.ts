import { LineGraphComponent } from './line-graph/line-graph.component';
import { PieGraphComponent } from './pie-graph/pie-graph.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
