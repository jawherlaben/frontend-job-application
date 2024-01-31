import { Component } from '@angular/core';
import { Job, Skills, JOB_TYPES } from '../Model/job-offer';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
    job: Job;
    tagsText: string = '';
    jobTypesEnum = Object.values(JOB_TYPES).filter(value => typeof value === 'string'); 
    skillsEnum = Object.values(Skills).filter(value => typeof value === 'string');
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
