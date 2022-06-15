import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import HC_exporting from 'highcharts/modules/exporting';
import ExportingModule from 'highcharts/modules/exporting';
import HC_exporting from 'highcharts/modules/export-data';
import SunsetTheme from 'highcharts/themes/sunset.js';
import * as Highcharts from "highcharts";

// The modules will work for all charts.
ExportingModule(Highcharts);
HC_exporting(Highcharts);
SunsetTheme(Highcharts);

var result = [{Default: "1/1/2022","Opex": 1/1/2022, value: 40},
              {Default: "2/1/2022", Opex: 2/1/2022, value: 60},
              {Default: "2/1/2022", Opex: 2/1/2022, value: 60},
              { Default: "3/1/2022", Opex: 3/1/2022, value: 70 },
              { Default: "4/1/2022", Opex: 4/1/2022, value: 80 },
              { Default: "5/1/2022", Opex: 5/1/2022, value: 95 },
              { Default: "6/1/2022", Opex: 6/1/2022, value: 98 },
              { Default: "7/1/2022", Opex: 7/1/2022, value: 118 },
              { Default: "8/1/2022", Opex: 8/1/2022, value: 127 },
              { Default: "9/1/2022", Opex: 9/1/2022, value: 139 },
              { Default: "10/1/2022", Opex: 10/1/2022, value: 149 },
              { Default: "11/1/2022", Opex: 11/1/2022, value: 159 },
              { Default: "12/1/2022", Opex: 12/1/2022, value: 170 },
              { Default: "13/1/2022", Opex: 13/1/2022, value: 184 },
              { Default: "14/1/2022", Opex: 14/1/2022, value: 191 },
              { Default: "15/1/2022", Opex: 15/1/2022, value: 200 },
              ];

console.log(result);
var data: number[]=[];
result.forEach((pie)=>{
  data.push(pie.value);
})

@Component({
  selector: 'pie-app',
  templateUrl: './pie-graph.component.html'
})
export class PieGraphComponent {
  chart!: Chart;

  ngOnInit() {
    this.init();
  }
  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  

  removePoint() {
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  removeSerie() {
    this.chart.removeSeries(this.chart.ref.series.length - 1);
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Piechart'
      },
      subtitle:{
        text:''
      },
      xAxis:{
        categories:["1/1/2022","2/1/2022","3/1/2022","4/1/2022","5/1/2022","6/1/2022","7/1/2022","8/1/2022","9/1/2022","10/1/2022","11/1/2022","12/1/2022","13/1/2022","14/1/2022","15/1/2022"]},
      yAxis: {
        title:{
          text: 'Pie Graph(Number)',
        },
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Value',
        type: 'pie',
        data: data
      },
      
    ]
    });
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(console.log);
  }

}


