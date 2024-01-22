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
    }
  ];
}