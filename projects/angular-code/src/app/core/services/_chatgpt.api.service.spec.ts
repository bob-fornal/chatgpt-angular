
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApiService
      ],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get data from the API and update the data subject', async () => {
    const mockData = 'test data';
    spyOn(service['_dataSubject'], 'next').and.stub();
    spyOn(service['http'], 'get').and.returnValue(of(mockData));

    await service.getData();
    expect(service['_dataSubject'].next).toHaveBeenCalledWith({ data: 'test data' });
  });

  it('should handle errors when getting data from the API', async () => {
    const mockError = new Error('test error');
    spyOn(service['_dataSubject'], 'next').and.stub();
    spyOn(service['http'], 'get').and.throwError(mockError);

    await service.getData();
    expect(service['_dataSubject'].next).toHaveBeenCalledWith({ data: null, error: 'test error' });
  });
});

