import { TestBed } from '@angular/core/testing';

import { CommonserviceRestapiService } from './commonservice-restapi.service';

describe('CommonserviceRestapiService', () => {
  let service: CommonserviceRestapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonserviceRestapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
