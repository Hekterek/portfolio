import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  emailPattern: RegExp = /^[a-z\d]+[\w.-]*@[a-z\d]+[a-z\d-]*\.[a-z]{2,63}$/i;

  formContact = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(25)]],
  });

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  ngOnDestroy(): void {
    console.log(this.formContact.value);

    this.contactService.saveContactForm(this.formContact.value);
  }

  loadContacts() {
    const oldData = this.contactService.loadContactForm();

    if (oldData !== undefined) {
      this.formContact.controls.email.setValue(oldData.email);
      this.formContact.controls.subject.setValue(oldData.subject);
      this.formContact.controls.message.setValue(oldData.message);
    }
  }

  get email() {
    return this.formContact.get('email');
  }

  get subject() {
    return this.formContact.get('subject');
  }

  get message() {
    return this.formContact.get('message');
  }

  sendEmail() {
    this.emailService
      .sendEmail(this.formContact.value)
      .subscribe(() => this.formContact.reset());
  }
}
