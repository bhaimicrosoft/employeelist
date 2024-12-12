import { Injectable, signal } from '@angular/core';
import { openDB } from 'idb';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dbPromise = openDB('employee-db', 1, {
    upgrade(db) {
      db.createObjectStore('employees', { keyPath: 'id', autoIncrement: true });
    }
  });

  employees = signal<Employee[]>([]);

  async loadEmployees() {
    const db = await this.dbPromise;
    this.employees.set(await db.getAll('employees'));
  }

  async addEmployee(employee: Employee) {
    const db = await this.dbPromise;
    await db.add('employees', employee);
    await this.loadEmployees();
  }

  async updateEmployee(employee: Employee, id: string) {
    const db = await this.dbPromise;
    const updatedEmployee = { ...employee, id: +id };
    await db.put('employees', updatedEmployee);
    await this.loadEmployees();
  }

  async deleteEmployee(id: number) {
    const db = await this.dbPromise;
    await db.delete('employees', id);
    await this.loadEmployees();
  }
}
