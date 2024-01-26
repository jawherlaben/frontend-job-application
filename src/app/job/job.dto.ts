
import { Skills, JOB_TYPES } from '../Model/job-offer';

export interface JobDto {
  title: string;
  description: string;
  body: string;
  pay: string;
  type: JOB_TYPES;
  tags: Skills[];
}
