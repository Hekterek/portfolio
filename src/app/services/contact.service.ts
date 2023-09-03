import { Injectable } from '@angular/core';
import { contactModel } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  formData: any;

  constructor() {}

  saveContactForm(formData: any) {
    this.formData = formData;
  }

  loadContactForm() {
    return this.formData as contactModel;
  }
}
