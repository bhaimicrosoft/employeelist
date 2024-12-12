export interface Employee {
  id?: number;
  empName: string;
  position: string;
  dateOfJoining: Date;
  dateOfLeaving?: Date | null;
}
