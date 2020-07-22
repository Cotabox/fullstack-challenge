import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartService } from '../services/chart.service';




@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.css']
})
export class ChartDoughnutComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
  
    
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private readonly chartServiceNotification: ChartService) {


   }

  ngOnInit() {
    this.chartServiceNotification.onNotification().subscribe(({data}) => {
      console.log(data)
    })
  }

}
