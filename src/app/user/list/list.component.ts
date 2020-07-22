import { map } from 'rxjs/operators';
import { ChartService } from "./../../services/chart.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/user";
import { Observable, Subscription } from "rxjs";
import  { SortUserByName } from '../../helpers/array'
@Component({
  selector: "app-user-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit, OnDestroy {
  data: Observable<Array<User>>;
  messageSubscription: Subscription;

  constructor(
    private service: UserService,
    private readonly chartServiceNotification: ChartService
  ) {}

  ngOnInit(): void {
    this.messageSubscription = this.chartServiceNotification
      .onNotification()
      .subscribe((d) => {
        this.data = this.service.getUsers().pipe(
          map((data: Array<User>) => {
             return data.sort(SortUserByName)
          })
        );
      });
    this.data = this.service.getUsers().pipe(
      map((data: Array<User>) => {
         return data.sort(SortUserByName)
      })
    );
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }
}
