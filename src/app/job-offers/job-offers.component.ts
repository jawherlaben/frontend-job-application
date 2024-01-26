import { Component, OnInit } from '@angular/core';
import { JobOfferService } from '../services/job-offer.service';
import { JobOffer } from '../Model/job-offer';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})

export class JobOffersComponent  implements OnInit {
  jobOffers: JobOffer[] = [];
  selectedJob: any | null = null;

  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.getJobOffers();
  }

  getJobOffers(): void {
    this.jobOfferService.getJobOffers().subscribe(
      (jobOffers: JobOffer[]) => {
        this.jobOffers = jobOffers;
        console.log(jobOffers);
      },
      (error) => {
        console.error('Error fetching job offers:', error);
      }
    );
  }

  toggleOptions(job: any): void {
    if (this.selectedJob && this.selectedJob !== job) {
      this.selectedJob.showOptions = false;
    }

    job.showOptions = !job.showOptions;
    this.selectedJob = job;
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

  hideOptionsOutsideClick(event: Event, job: any): void {
    if (job.showOptions) {
      const optionsButton = document.getElementById('options-menu');

      if (!optionsButton || !optionsButton.contains(event.target as Node)) {
        job.showOptions = false;
        this.selectedJob = null;
      }
    }
  }
}