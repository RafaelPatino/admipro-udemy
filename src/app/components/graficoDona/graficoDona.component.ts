import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficoDona',
  templateUrl: './graficoDona.component.html',
  styleUrls: ['./graficoDona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  @Input('ChartLabels') doughnutChartLabels: string[] = [];
  @Input('ChartData')  doughnutChartData: number[] = [];
  @Input('ChartType')  doughnutChartType: string = '';


  constructor() { }

  ngOnInit() {
  }

}
