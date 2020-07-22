import { ChartService } from './../../services/chart.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private readonly userService: UserService,
    private readonly chartServiceNotification: ChartService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      participation: [null, [Validators.required, Validators.pattern('[0-9]{1,}')]],
    })
  }



  handleSubmit(){

    
    this.userService.addUser(this.form.value).subscribe((d)=> {
      this.form.reset()
      this.chartServiceNotification.sendNotification({reload: true})
      
    })
  }

}
