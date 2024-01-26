import { Component } from '@angular/core';
import { Job, Skills, JOB_TYPES } from '../Model/job-offer';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
    job: Job;

    constructor() {
        this.job = new Job(
            '',  
            '',  
            '',  
            '',  
            JOB_TYPES.REMOTE, 
            []   
        );
    }

    submitJobForm() {
    
        console.log(this.job);
    }
}
