import { TestBed } from '@angular/core/testing';

import { Seguro } from './seguro.service';

describe('Seguro', () => {
  let service: Seguro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seguro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
