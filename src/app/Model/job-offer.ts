export interface JobOffer {
  _id: string;
  title: string;
  description: string;
  body: string;
  pay?: string;
  type?: string;
  tags?: string[];
  applications: string[]; 
  chats?: string[]; 
  recruiter: string;
}