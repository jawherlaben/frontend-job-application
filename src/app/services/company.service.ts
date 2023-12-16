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
    return [
      new Company('1', 'Company One', '123 First St.', 'This is the first company.', 'assets/logo1.png', 'http://company1.com', 'Active'),
    ];
  }

  followCompany(id: string): Observable<any> {
    const url = `http://backend.com/api/companies/${id}/follow`;
    return this.http.post(url, {});
  }
}
