
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';

interface DataResponse {
  data: any;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _dataSubject: BehaviorSubject<DataResponse> = new BehaviorSubject<DataResponse>({ data: null });
  public readonly data: Observable<DataResponse> = this._dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  public async getData(): Promise<void> {
    try {
      const response = await firstValueFrom(this.http.get('https://api.example.com/data'));
      this._dataSubject.next({ data: response });
    } catch (error: any) {
      console.error('There was a problem with the HTTP request:', error);
      this._dataSubject.next({ data: null, error: error.message });
    }
  }
}
