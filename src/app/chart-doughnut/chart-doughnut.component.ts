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

  public doughnutChartLabels: Label[] = ["Carlos Moura", 
  "Fernanda Oliveira",
  "Hugo Silva",
  "Eliza Souza",
  "Anderson Santos",
  ];

  public doughnutChartData: MultiDataSet = [5, 15, 20, 20, 40];


/* FORM DATA TO IMPORT AND USE IN LABEL AND MULTIDATASET
{{ profileForm.value | json }}
/*



  /*
    {color:"#15b999",
    highlight: "#FF5A5E",    
    value: 5
    },
    {
    color:"#bcc2c7",
    highlight: "#5AD3D1",
    value: 15
    },
    {
    color:"#2c96dd",
    highlight: "#FFC870",
    value: 20
    },
    {
    color:"#9c55b8",
    highlight: "#FD5A5E",
    value: 20
    },
    {
    color:"#e94a35",
    highlight: "#FC5A5E",
    value: 40
    },
  */


  public doughnutChartType: ChartType = 'doughnut';

  constructor(private readonly chartServiceNotification: ChartService) {


   }

  ngOnInit() {
    this.chartServiceNotification.onNotification().subscribe(({data}) => {
      console.log(data)
    })
  }

}
