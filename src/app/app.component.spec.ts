import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmployeeService } from './shared/services/employee.service';
import { LoaderService } from './shared/services/loader.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeStub } from 'src/assets/mocks/employee.stub';

describe('AppComponent', () => {
  let component:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        // Using Stub
        { provide: EmployeeService, useClass: EmployeeStub },
        LoaderService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'interceptor-and-service'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('interceptor-and-service');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('interceptor-and-service app is running!');
  // });

  // Covering ngOnInit
  it('should be call on ngOnInit', () => {
    component.ngOnInit();
    console.log('component.employee.length',component.employee.length);
    expect(component.employee.length).toBeGreaterThan(0);
  })
});
