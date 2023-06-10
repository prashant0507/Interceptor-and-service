import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { EmployeeStub } from 'src/assets/mocks/employee.stub';
import { Employee } from '../models/employee';

describe('EmployeeService', () => {
  let service: EmployeeService;
  // httpClient:any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call employee()', () => {
    // let emp = new EmployeeService(httpClient); // Another way instead of TestBed.get(EmployeeService)

    let employeeStubObj = new EmployeeStub();
    let mockEmployee = employeeStubObj.employee();
    //console.log('Employee Stub Observable', mockEmployee) // should be return observable

    let response: Employee[] = [];

    service = TestBed.get(EmployeeService);
    spyOn(service, 'employee').and.returnValue(mockEmployee);
    service.employee().subscribe((res: Employee[]) => {
      //console.log('Employee Stub Array =>>>', res); // will console stub data
      response = res;
      expect(response.length).toBeGreaterThan(0);
    })
  })
});
