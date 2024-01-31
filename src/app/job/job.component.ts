import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '../services/job.service';
import { Job, Skills,REMUNERATION, JOB_TYPES } from '../Model/job-offer';
import { JobDto } from '../Model/job.dto';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  jobForm: FormGroup;
  skillsEnum = Object.values(Skills).filter(value => typeof value === 'string');
  jobTypesEnum = Object.values(JOB_TYPES).filter(value => typeof value === 'string');
  remunerationOptions = REMUNERATION;

  constructor(
    private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private jobService: JobService
  ) {
    this.jobForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      body: ['', Validators.required],
      pay: ['', Validators.required],
      type: ['', Validators.required],
      tags: [[], Validators.required]
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const jobData: JobDto = {
        ...this.jobForm.value,
        type: this.jobForm.value.type.toUpperCase(), 
        tags: this.jobForm.value.tags.map((tag: string) => tag.toUpperCase()) 
      };

      this.jobService.createJob(jobData).subscribe({
        next: (response) => {
          this.toastr.success('Job posted successfully!', 'Success');
          this.jobForm.reset();
        },
        error: (error) => {
          this.toastr.error('Failed to post job', 'Error');
        }
      });
    } else {
      this.toastr.error('Please fill out the form correctly', 'Form Invalid');
    }
  }
}
