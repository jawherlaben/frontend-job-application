import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobOffer } from '../Model/job-offer';
import { Observable } from 'rxjs';
import { classpathoperations, environment, pathconst } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService
{

  private apiUrl = environment.apiUrl;
  private jobEndpoint = pathconst.JOB_ENDPOINT_PATH;
  
  private findCompanyByID = classpathoperations.FIND_COMPANY_BY_ID;
  private findCompanyByEmail = classpathoperations.FIND_COMPANY_BY_EMAIL;


  constructor(private httpClient: HttpClient) {}

  createJobOffer(createJobDto: any): Observable<JobOffer> {
    return this.httpClient.post<JobOffer>(`${this.apiUrl}/${this.jobEndpoint}`, createJobDto);
  }

  getJobOffers(): Observable<JobOffer[]> {
    return this.httpClient.get<JobOffer[]>(`${this.apiUrl}/${this.jobEndpoint}`);
  }

  getJobOfferById(id: string): Observable<JobOffer> {
    return this.httpClient.get<JobOffer>(`${this.apiUrl}/${this.jobEndpoint}/findjobbyid/${id}`);
  }

  updateJobOffer(id: string, updateJobDto: any): Observable<JobOffer> {
    return this.httpClient.patch<JobOffer>(`${this.apiUrl}/${this.jobEndpoint}/${id}`, updateJobDto);
  }

  deleteJobOffer(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${this.jobEndpoint}/${id}`);
  }
}
