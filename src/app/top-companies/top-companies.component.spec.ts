import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCompaniesComponent } from './top-companies.component';

describe('TopCompaniesComponent', () => {
  let component: TopCompaniesComponent;
  let fixture: ComponentFixture<TopCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCompaniesComponent]
    });
    fixture = TestBed.createComponent(TopCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
