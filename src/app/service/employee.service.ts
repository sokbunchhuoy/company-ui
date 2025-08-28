import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Employee} from "../demo/components/company/employee/employee.model";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    baseUrl: string = 'http://localhost:3000/employees';
    baseUrl1: string = 'http://localhost:3000/positions';
    constructor(private http: HttpClient) {
    }

    getPosition(): Observable<Employee[]> {
        return this.http.get<any[]>(this.baseUrl1);
    }

    list(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.baseUrl);
    }

    getById(id: string | number): Observable<Employee> {
        return this.http.get<Employee[]>(this.baseUrl, { params: { id: String(id) } })
            .pipe(map(list => {
                if (!list.length) { throw new HttpErrorResponse({ status: 404, statusText: 'Not Found' }); }
                return list[0];
            }));
    }

    create(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.baseUrl, employee);
    }

    update(id: string, employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee).pipe(
            catchError(err => {
                if (err.status === 404) {
                    // create instead
                    return this.http.post<Employee>(this.baseUrl, {...employee, id});
                }
                return throwError(() => err);
            })
        );
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
