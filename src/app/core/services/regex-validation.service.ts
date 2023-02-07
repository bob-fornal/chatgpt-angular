import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexValidationService {

  basicRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  comprehensiveRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  deaRegex = /^[a-zA-Z][a-zA-Z0-9][0-9]{6}$/;

  constructor() { }
}
