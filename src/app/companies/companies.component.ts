import { Component, OnInit } from '@angular/core';
import { Company } from '../Model/Company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  totalCompanies: number = 0;
  companiesPerPage: number = 10;
  currentPage: number = 1;
  paginatedCompanies: Company[] = [];
  filteredCompanies: Company[] = [];

  constructor(private companyService: CompanyService) {}


  ngOnInit(): void {
    // this.companies = this.companyService.getCompanies();
    // this.filteredCompanies = [...this.companies]; // Start with all companies
    // this.totalCompanies = this.companies.length; // Set the total number of companies
    // this.onPageChange(1);
    
    console.log(this.companyService.getCompanies());
    this.companyService.getCompanies().subscribe((companies: Array<Company>) => {
      this.companies = [...companies];
      this.totalCompanies = this.companies.length; 
      this.onPageChange(1);
    }); 

  }

  updatePaginatedCompanies(): void {
    const startIndex = (this.currentPage - 1) * this.companiesPerPage;
    const endIndex = startIndex + this.companiesPerPage;
    this.paginatedCompanies = this.filteredCompanies.slice(startIndex, endIndex);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.updatePaginatedCompanies();
  }

  getCompanies(): Company[] {
    return [
      new Company('1', 'Company One', '123 First St.', 'This is the first company.', 'assets/logo1.png', 'http://company1.com', 'Active'),
    ];
  }

  performSearch(query: string): void {
    if (query) {
      this.filteredCompanies = this.companies.filter(company =>
        company.name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredCompanies = [...this.companies];
    }
    this.totalCompanies = this.filteredCompanies.length;
    this.onPageChange(1);
  }

}
