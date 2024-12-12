import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import {roles} from "../../constants/constants";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: number | null = null;
  protected readonly roles = roles || [];
  // storing the min leaving date as it can't be older than the joining date, default is today
  minLeavingDate = signal<Date>(new Date());
  editMode = false;
  id = '';
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      empName: ['', Validators.required],
      position: [null, Validators.required],
      dateOfJoining: ['', Validators.required],
      dateOfLeaving: [null]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      console.log(this.id)
      if (this.id) {
        this.editMode = true;
        this.employeeId = +this.id;
        const employee = this.employeeService.employees().find(emp => emp.id === this.employeeId);
        if (employee) {
          this.employeeForm.patchValue(employee);
        }
      }
    });
  }

  async onSubmit() {

    if (this.employeeForm.valid) {
      if (this.editMode) {
        await this.employeeService.updateEmployee(this.employeeForm.value, this.id);
      } else {
        await this.employeeService.addEmployee(this.employeeForm.value);
      }
      await this.router.navigate(['/employees']);
    }
  }


  updateMinDate(ev: Date) {
    this.minLeavingDate.set(ev);
  }

  clearForm() {
    this.employeeForm.reset();
    this.router.navigateByUrl('/').then();
  }
}
