import { TestBed } from '@angular/core/testing';

import { AuthenticationShellService } from './authentication-shell.service';

describe('AuthenticationShellService', () => {
  let service: AuthenticationShellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationShellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
