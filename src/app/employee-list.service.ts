import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IEmployee, IEntries } from "./employees";
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class EmployeeListService {
  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) {}

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(
      catchError(error => {
        return throwError(error.message || "Server error");
      })
    )
  }

  getEntries(): Observable<IEntries> {
    return this.http.get<IEntries>("https://api.publicapis.org/entries").pipe(
      catchError(error => {
        return throwError(error.message || "Server error");
      })
    )
  }
}
