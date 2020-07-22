import { map } from "rxjs/operators";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ChartType } from "chart.js";
import { Label, MultiDataSet, ThemeService } from "ng2-charts";
import { ChartService } from "../services/chart.service";
import { UserService } from "../services/user.service";
import { User } from "../user";
import { Subscription } from "rxjs";
import { SortUserByName } from "../helpers/array";
@Component({
  selector: "app-chart-doughnut",
  templateUrl: "./chart-doughnut.component.html",
  styleUrls: ["./chart-doughnut.component.css"],
})
export class ChartDoughnutComponent implements OnInit, OnDestroy {
  public doughnutChartLabels: Label[] = [];

  public doughnutChartData: MultiDataSet = [];

  showChart = false;

  public doughnutChartType: ChartType = "doughnut";

  messageSubscription: Subscription;

  constructor(
    private readonly chartServiceNotification: ChartService,
    private readonly userService: UserService
  ) {}

  ngOnInit() {
    this.messageSubscription = this.chartServiceNotification
      .onNotification()
      .subscribe(({ data }) => {
        this.initialize();
      });
    this.initialize();
  }
  initialize() {
    this.userService
      .getUsers()
      .pipe(
        map((data: Array<User>) => {
          return data.sort(SortUserByName);
        })
      )
      .subscribe((data: Array<User>) => {
        if (data.length === 0) return;
        this.makeDataForChart(data);
      });
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  makeDataForChart(data: Array<User>) {
    const labels = [];
    const chartData = [];
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    data.forEach((row) => {
      labels.push(`${row.firstName} ${row.lastName}`);
      chartData.push(row.participation);
    });

    this.doughnutChartData.push(chartData);
    this.doughnutChartLabels = labels;
    this.showChart = true;
  }
}
