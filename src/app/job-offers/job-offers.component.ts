import { Component, HostListener, OnInit } from '@angular/core';
import { JobOfferService } from '../services/job-offer.service';
import { JobOffer } from '../Model/job-offer';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../Model/Company';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
})
export class JobOffersComponent  implements OnInit {
  jobOffers: JobOffer[] = [];
  companies: { [id: string]: Company } = {};

  selectedJob: any | null = null;
  public isMenuOpen = false;

  openMenus: { [key: string]: boolean } = {};


  constructor(
    private router: Router,
    private jobOfferService: JobOfferService,
    private companyService: CompanyService

     ) {}

  ngOnInit(): void {
    this.getJobOffers();
  }
  
/*
  getJobOffers(): void {
    this.jobOfferService.getJobOffers().subscribe(
      (jobOffers: JobOffer[]) => {
        this.jobOffers = jobOffers;
      },
      (error) => {
        console.error('Error fetching job offers:', error);
      }
    );
  }
*/
  
  getJobOffers(): void {
    this.jobOfferService.getJobOffers().subscribe(
      (jobOffers: JobOffer[]) => {
        this.jobOffers = jobOffers;
        jobOffers.forEach(job => {
          this.companyService.getCompanyById(job.recruiter).subscribe(
            (company: Company) => {
              this.companies[job.recruiter] = company;
            }
          );
        });
      },
      (error) => {
        console.error('Error fetching job offers:', error);
      }
    );
  }



  ignoreJob(job: any): void {
  
    const index = this.jobOffers.indexOf(job);

    if (index !== -1) {
      this.jobOffers.splice(index, 1);

      if (this.selectedJob === job) {
        this.selectedJob = null;
      }
    }
    

  }


  public toggleMenu(jobId: string): void {
    if (this.openMenus[jobId] === undefined) {
      this.openMenus[jobId] = false;
    }
    this.openMenus[jobId] = !this.openMenus[jobId];

    for (const id in this.openMenus) {
      if (id !== jobId) {
        this.openMenus[id] = false;
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (targetElement && !targetElement.matches('.menu-button, .menu-button *')) {
      Object.keys(this.openMenus).forEach(key => {
        this.openMenus[key] = false;
      });
    }
  }

  viewCompany(companyId: string): void {
    this.router.navigate(['user-component/company', companyId]);
  }

}