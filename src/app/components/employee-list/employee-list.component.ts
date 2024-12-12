import {Component, computed, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees = this.employeeService.employees;
  previousEmployees = computed(() => this.employees().filter(emp => emp.dateOfLeaving !== null));
  currentEmployees = computed(() => this.employees().filter(emp => emp.dateOfLeaving === null));

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    await this.employeeService.loadEmployees();
  }
  addEmployee(): void {
    this.router.navigate(['/employee/add']).then();
  }

}
