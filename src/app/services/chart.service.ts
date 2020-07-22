import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private notification = new Subject<any>()
  constructor() { }
  
  sendNotification(data: any){
      this.notification.next({data})
  }

  onNotification(): Observable<any> {
    return this.notification.asObservable()
  }

  clearNotification(){
    this.notification.next('')
  }
}
