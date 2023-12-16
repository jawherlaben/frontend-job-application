import { Component, OnInit } from '@angular/core';
import { Company } from '../Model/Company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  totalCompanies: number = 0;
  companiesPerPage: number = 5; // a changer
  currentPage: number = 1;
  paginatedCompanies: Company[] = [];
  filteredCompanies: Company[] = [];
  searchTerm: string = '';


  
  constructor() {}

  ngOnInit(): void {
    this.companies = this.getCompanies();
    this.totalCompanies = this.companies.length;
    this.updatePaginatedCompanies();
  }

  getCompanies(): Company[] {
    return  ([
      new Company('1', 'Company One', '123 First St.', 'This is the first company.', 'assets/logo1.png', 'http://company1.com', 'Active'),
      new Company('2', 'Company Two', '456 Second St.', 'This is the second company.', 'assets/logo2.png', 'http://company2.com', 'Active'),
      new Company('3', 'Company One', '123 First St.', 'This is the first company.', 'assets/logo1.png', 'http://company1.com', 'Active'),
      new Company('4', 'Company Two', '456 Second St.', 'This is the second company.', 'assets/logo2.png', 'http://company2.com', 'Active'),
      new Company('5', 'Company One', '123 First St.', 'This is the first company.', 'assets/logo1.png', 'http://company1.com', 'Active'),
      new Company('6', 'Company Two', '456 Second St.', 'This is the second company.', 'assets/logo2.png', 'http://company2.com', 'Active'),
      new Company('7', 'Company One', '123 First St.', 'This is the first company.', 'assets/logo1.png', 'http://company1.com', 'Active'),
      new Company('8', 'Company Two', '456 Second St.', 'This is the second company.', 'assets/logo2.png', 'http://company2.com', 'Active'),
      new Company('9', 'Company One', '123 First St.', 'This is the first company.', 'assets/logo1.png', 'http://company1.com', 'Active'),
      new Company('10', 'Company Two', '456 Second St.', 'This is the second company.', 'assets/logo2.png', 'http://company2.com', 'Active'),
      new Company('11', 'Company One', '123 First St.', 'This is the first company.', 'assets/logo1.png', 'http://company1.com', 'Active'),
      new Company('12', 'Company Two', '456 Second St.', 'This is the second company.', 'assets/logo2.png', 'http://company2.com', 'Active'),
    ]);
  }

  updatePaginatedCompanies(): void {
    const startIndex = (this.currentPage - 1) * this.companiesPerPage;
    const endIndex = startIndex + this.companiesPerPage;
    this.paginatedCompanies = this.companies.slice(startIndex, endIndex);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.updatePaginatedCompanies();
  }
  
  performSearch(query: string): void {
    this.searchTerm = query.toLowerCase();
    this.filteredCompanies = this.companies.filter((company) =>
      company.name.toLowerCase().includes(this.searchTerm)
    );
  }
}
