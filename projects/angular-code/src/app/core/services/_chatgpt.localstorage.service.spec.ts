import { LocalstorageService } from './localstorage.service';

import config from '@core/constants/config.json';

describe('LocalstorageService', () => {
  let service: LocalstorageService;
  
  beforeEach(() => {
    service = new LocalstorageService();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an item from local storage', () => {
    localStorage.setItem('testKey', 'testValue');
    expect(service.get('testKey')).toBe('testValue');
  });

  it('should set an item in local storage', () => {
    service.set('testKey', 'testValue');
    expect(localStorage.getItem('testKey')).toBe('testValue');
  });

  it('should get websocket key from local storage', () => {
    const readKey: string = config.key;
    localStorage.setItem(readKey, 'testKey');
    expect(service.getWebsocketKey()).toBe('testKey');
  });

  it('should set websocket key in local storage', () => {
    const readKey: string = config.key;
    service.setWebsocketKey('testKey');
    expect(localStorage.getItem(readKey)).toBe('testKey');
  });
});
