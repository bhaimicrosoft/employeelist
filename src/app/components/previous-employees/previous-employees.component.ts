import {Component, inject, Input} from '@angular/core';
import {Employee} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-previous-employees',
  templateUrl: './previous-employees.component.html',
  styleUrls: ['./previous-employees.component.scss']
})
export class PreviousEmployeesComponent {
  @Input() previousEmployees: Employee[] = [];

  employeeService = inject(EmployeeService);
  router = inject(Router);

  async deleteEmployee(id: number): Promise<void> {
    await this.employeeService.deleteEmployee(id);
  }

  editEmployee(employee: Employee): void {
    this.router.navigate(['/employee/edit', employee.id]).then();
  }


}
