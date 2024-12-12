import {Component, inject, Input, Signal, signal} from '@angular/core';
import {Employee} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-current-employees',
  templateUrl: './current-employees.component.html',
  styleUrls: ['./current-employees.component.scss']
})
export class CurrentEmployeesComponent {
  @Input() currentEmployees: Employee[] = [];
  employeeService = inject(EmployeeService);
  router = inject(Router);

  async deleteEmployee(id: number): Promise<void> {
    await this.employeeService.deleteEmployee(id);
  }

  editEmployee(employee: Employee): void {
    this.router.navigate(['/employee/edit', employee.id]).then();
  }
}
