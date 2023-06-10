import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeService } from './shared/services/employee.service';
import { Employee } from './shared/models/employee';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'interceptor-and-service';
  employee: Employee[] = [];

  // Getting value of isLoading
  isLoading: BehaviorSubject<boolean> = this.loader.isLoading;

  constructor(private _emp: EmployeeService, private loader: LoaderService) { }

  ngOnInit(): void {
    this._emp.employee().subscribe((emp: Employee[]) => {
      this.employee = emp;
    })
  }
}
