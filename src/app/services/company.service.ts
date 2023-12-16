import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '../Model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companies: Company[] = [
  ];
    http: any;

  constructor() { }

  getCompanies(): Company[] {
    return  (
      [
        new Company('1', 'Company 1', '123 First St.', 'This is the 1 company.', 'assets/logo1.png', '#', 'Active'),
        new Company('2', 'Company 2', '345 Second St.', 'This is the 2 company.', 'assets/logo2.png', '#', 'Active'),
        new Company('3', 'Company 3', '567 First St.', 'This is the 3 company.', 'assets/logo1.png', '#', 'Active'),
        new Company('4', 'Company 4', '891 Second St.', 'This is the 4 company.', 'assets/logo2.png', '#', 'Active'),
        new Company('5', 'Company 5', '564 First St.', 'This is the 5 company.', 'assets/logo1.png', '#', 'Active'),
        new Company('6', 'Company 6', '784 Second St.', 'This is the 6 company.', 'assets/logo2.png', '#', 'Active'),
        new Company('7', 'Company 7', '985 First St.', 'This is the 7 company.', 'assets/logo1.png', '#', 'Active'),
        new Company('8', 'Company 8', '234 Second St.', 'This is the 8 company.', 'assets/logo2.png', '#', 'Active'),
        new Company('9', 'Company 9', '972 First St.', 'This is the 9 company.', 'assets/logo1.png', '#', 'Active'),
        new Company('10', 'Company 10', '002 Second St.', 'This is the 10 company.', 'assets/logo2.png', '#', 'Active'),
        new Company('11', 'Company 11', '198 First St.', 'This is the 11 company.', 'assets/logo1.png', '#', 'Active'),
        new Company('12', 'Company 12', '7845 Second St.', 'This is the 12 company.', 'assets/logo2.png', '#', 'Active'),
      ]);
  }

  followCompany(id: string): Observable<any> {
    const url = `http://backend.com/api/companies/${id}/follow`;
    return this.http.post(url, {});
  }
}
