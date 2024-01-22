import { Component } from '@angular/core';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})

export class JobOffersComponent {
  jobOffers: any[] = [
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    },
    {
      title: 'Software Developer',
      recruiter: { name: 'ABC Tech', location: 'City, Country' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pay: 'Paid',
      type: 'full-time',
      tags: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      title: 'UX Designer',
      recruiter: { name: 'XYZ Design', location: 'Another City, Country' },
      description: 'Aenean euismod bibendum laoreet.',
      pay: 'Paid',
      type: 'part-time',
      tags: ['UI/UX', 'Sketch', 'InVision']
    }
  ];


  selectedJob: any | null = null;

  toggleOptions(job: any): void {
    if (this.selectedJob && this.selectedJob !== job) {
      // Fermez la liste déroulante du poste précédent s'il y en a un autre ouvert
      this.selectedJob.showOptions = false;
    }

    job.showOptions = !job.showOptions;
    this.selectedJob = job;
  }

  ignoreJob(job: any): void {
    const index = this.jobOffers.indexOf(job);

    if (index !== -1) {
      this.jobOffers.splice(index, 1);

      // Assurez-vous que le poste ignoré n'a pas la liste déroulante ouverte
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