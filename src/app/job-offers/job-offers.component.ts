import { Component, HostListener, Input, OnInit } from '@angular/core';
import { JobOfferService } from '../services/job-offer.service';
import { JobOffer } from '../Model/job-offer';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../Model/Company';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
})

export class JobOffersComponent  implements OnInit {

  @Input() user: User | undefined; 


  jobOffers: JobOffer[] = [];
  companies: { [id: string]: Company } = {};

  comments: { [id: string]: string } = {}; 
  appliedJobs: { [id: string]: boolean } = {};

  selectedCVFileNames: { [id: string]: string } = {};

  selectedJob: any | null = null;
  public isMenuOpen = false;

  openMenus: { [key: string]: boolean } = {};


  constructor(
    private router: Router,
    private jobOfferService: JobOfferService,
    private companyService: CompanyService,
    private userService : UserService

     ) {}

  ngOnInit(): void {
    this.getJobOffers();
    this.loadUserApplications();
  }

  
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
  

  selectedCVs: { [id: string]: File } = {};


  onFileSelected(event: Event, jobId: string) {
    const element = event.currentTarget as HTMLInputElement;
    let file: File | null = element.files ? element.files[0] : null;
    if (file) {
      this.selectedCVs[jobId] = file;
    }
  }

  applyToJob(jobId: string): void {
    const comment = this.comments[jobId] || '';
    const cvFile = this.selectedCVs[jobId];

    this.jobOfferService.applyToJob(jobId, comment,cvFile).subscribe(
      response => {
        console.log('Application sent!', response);
        this.appliedJobs[jobId] = true;

      },
      error => {
        console.error('Error when applying to job:', error);
      }
    );
  }


  loadUserApplications(): void {
    this.userService.getCurrentUser().subscribe(user => {
      if (user && user._id) {
        this.userService.getUserApplications(user._id).subscribe(
          applications => {
            applications.forEach(app => {
              if (Array.isArray(app.job) && app.job.length > 0) {
                const jobId = app.job[0];
                this.appliedJobs[jobId] = true;
                this.selectedCVFileNames[jobId] = app.cv; 
              }
            });
          },
          error => console.error('Erreur lors du chargement des candidatures:', error)
        );
      }
    });
  }
}