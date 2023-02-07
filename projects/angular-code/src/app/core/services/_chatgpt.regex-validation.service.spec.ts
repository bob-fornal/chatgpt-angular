import { TestBed } from '@angular/core/testing';

import { RegexValidationService } from './regex-validation.service';

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

const validDeaNumbers = [
  'a0000000',
  'z9123456',
  'A0000007'
];
const invalidDeaNumbers = [
  'A00000000',
  '0A000000',
  '000000A',
  'A000000',
  'a000000',
];

describe('RegexValidationService', () => {
  let service: RegexValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegexValidationService);
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

describe('Regex pattern validation', function() {
  let service: RegexValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegexValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for valid inputs', function() {
    const deaRegex = service.deaRegex;

    validDeaNumbers.forEach(function(input) {
      expect(deaRegex.test(input)).toBe(true);
    });
  });

  it('should return false for invalid inputs', function() {
    const deaRegex = service.deaRegex;

    invalidDeaNumbers.forEach(function(input) {
      expect(deaRegex.test(input)).toBe(false);
    });
  });
});
