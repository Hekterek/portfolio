import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy, AfterViewInit {
  emailPattern: RegExp = /^[a-z\d]+[\w.-]*@[a-z\d]+[a-z\d-]*\.[a-z]{2,63}$/i;

  emailControlStatus!: string;
  subjectControlStatus!: string;
  messageControlStatus!: string;

  formContact = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(25)]],
  });

  messagePlaceholder: string = "I'm waiting for your message !";
  messageValue: string = '';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private contactService: ContactService
  ) {}
  ngAfterViewInit(): void {
    // this.messageWritingAfterSend();
  }

  ngOnInit(): void {
    this.loadContacts();
    this.formControlsStatusListner();
  }

  ngOnDestroy(): void {
    this.contactService.saveContactForm(this.formContact.value);
  }

  formControlsStatusListner() {
    this.formContact.controls.email.statusChanges.subscribe((status) => {
      this.emailControlStatus = status;
    });
    this.formContact.controls.subject.statusChanges.subscribe((status) => {
      this.subjectControlStatus = status;
    });
    this.formContact.controls.message.statusChanges.subscribe((status) => {
      this.messageControlStatus = status;
    });
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
    if (!this.email?.valid) {
      this.emailControlStatus = 'INVALID';
    } else if (!this.subject?.valid) {
      this.subjectControlStatus = 'INVALID';
    } else if (!this.message?.valid) {
      this.messageControlStatus = 'INVALID';
    } else {
      this.emailService.sendEmail(this.formContact.value).subscribe(() => {
        this.formContact.reset();
        this.emailControlStatus = 'VALID';
        this.subjectControlStatus = 'VALID';
        this.messageControlStatus = 'VALID';
        setTimeout(() => {
          this.messageWritingAfterSend();
        }, 800);
      });
    }
  }

  messageWritingAfterSend() {
    const message = 'Thank you for your message, I will reply as soon as I can';
    let index = 0;

    const write = () => {
      if (index < message.length) {
        this.messageValue += message[index];
        index++;
        setTimeout(write, 80);
      }

      if (index == message.length) {
        setTimeout(() => {
          this.messageValue = '';
        }, 3000);
      }
    };
    write();
  }
}
