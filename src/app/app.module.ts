import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { PieGraphComponent } from './pie-graph/pie-graph.component';
import { LineGraphComponent } from './line-graph/line-graph.component';

@NgModule({
  imports:      [ BrowserModule, ChartModule ],
  declarations: [ AppComponent, PieGraphComponent, LineGraphComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
