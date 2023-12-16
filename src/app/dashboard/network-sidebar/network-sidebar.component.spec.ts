import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSidebarComponent } from './network-sidebar.component';

describe('NetworkSidebarComponent', () => {
  let component: NetworkSidebarComponent;
  let fixture: ComponentFixture<NetworkSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkSidebarComponent]
    });
    fixture = TestBed.createComponent(NetworkSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
