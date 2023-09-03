import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AboutmeService {
  constructor() {}
}

export const image: ResolveFn<Blob> = () => {
  return inject(HttpClient).get('../../assets/photos/picture.PNG', {
    responseType: 'blob',
  });
};
