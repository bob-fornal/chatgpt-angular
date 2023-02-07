import { TestBed } from '@angular/core/testing';

import { EmailValidationService } from './email-validation.service';

const validEmails = [
  "user@example.com",
  "user.name@example.com",
  "user_name@example.com",
  "user-name@example.com",
  "user+name@example.com",
  "user@example.co.uk",
  "user@subdomain.example.com",
];

const invalidEmails = [
  "user@",
  "@example.com",
  "user@.com",
  "user@example.",
  "user@example..com",
  "user@.example.com",
  "user@example.c",
  "user@example.com.",
  "user@..example.com",
  "user@exam_ple.com.",
  "user@exam-ple.com.",
];

describe('EmailValidationService', () => {
  let service: EmailValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects comprehensive regex to handle valid emails', () => {
    const emailRegex = service.comprehensiveRegex;
    validEmails.forEach((email) => {
      expect(emailRegex.test(email)).toEqual(true);
    });  
  });

  it('expects comprehensive regex to handle invalid emails', () => {
    const emailRegex = service.comprehensiveRegex;
    invalidEmails.forEach((email) => {
      expect(emailRegex.test(email)).toEqual(false);
    });
  });
});
