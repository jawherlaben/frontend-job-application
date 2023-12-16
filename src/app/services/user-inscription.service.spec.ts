import { TestBed } from '@angular/core/testing';

import { UserInscriptionService } from './user-inscription.service';

describe('UserInscriptionService', () => {
  let service: UserInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
