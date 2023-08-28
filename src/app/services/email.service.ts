import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private httpClient: HttpClient) {}

  sendEmail(formData: Object): Observable<any> {
    return this.httpClient.post<any>(
      'https://usebasin.com/f/c91211f1f4c5',
      formData,
      { responseType: 'text' as 'json' }
    );
  }
}
