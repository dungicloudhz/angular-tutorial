import { Component, OnInit } from "@angular/core";
import { EmployeeListService } from "../employee-list.service";
import { IEntries } from "../employees";

@Component({
  selector: "app-employee-list",
  styleUrls: ["./employee-list.component.scss"],
  templateUrl: "./employee-list.component.html"
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public errorMsg;
  public listEntries = []

  constructor(private employeeService: EmployeeListService) {}

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(data => this.employees = data,
      error => this.errorMsg = error)
    this.employeeService.getEntries().subscribe((data: IEntries) => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    })
  }
}
