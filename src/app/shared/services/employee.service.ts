import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API = 'https://dummy.restapiexample.com/api/v1/employees';

  constructor(private http: HttpClient) { }

  employee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API).pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

}