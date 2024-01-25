import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../Model/Company';
import {classpathoperations, pathconst} from 'src/environments/environment';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private httpClient: HttpClient, private user: UserService) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient
    .get<Company[]>(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}`, {headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('currentUserToken')}`,
    }});
  }

  getCompanyById(id: string): Observable<Company> {
    return this.httpClient
    .get<Company>(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}/${classpathoperations.FIND_COMPANY_BY_ID}/${id}`);
  }

  getCompanyByEmail(email: string): Observable<Company> {
    return this.httpClient
    .get<Company>(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}/${classpathoperations.FIND_COMPANY_BY_EMAIL}/${email}`);
  }

  addCompany(company: Company): Observable<Company> {
    return this.httpClient
    .post<Company>(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}`, company);
  }

  deleteCompany(id: string) {
    return this.httpClient
    .delete(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}/${id}`);
  }
}
