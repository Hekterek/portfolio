import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formContact = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(25)]],
  });

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  sendEmail() {
    this.emailService
      .sendEmail(this.formContact.value)
      .subscribe(() => this.formContact.reset());
  }
}
