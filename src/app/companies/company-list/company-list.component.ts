import { Component, Input } from '@angular/core';
import { Company } from 'src/app/Model/Company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  @Input() companies: Company[] = [];

  followCompany(id: string): void {
    console.log('Following company with id:', id);
  }
}
