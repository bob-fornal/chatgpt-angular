
import { LocalstorageService } from './localstorage.service';

import { ToolsService } from './tools.service';

import config from '@core/constants/config.json';

describe('ToolsService', () => {
  let service: ToolsService;

  beforeEach(() => {
    service = new ToolsService(new LocalstorageService());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a UUID and write to local storage', () => {
    spyOn(service.storage, 'get').and.returnValue(null);
    spyOn(service.storage, 'set').and.stub();

    const uuid = service.generateUUID();

    expect(uuid).toBeTruthy();
    expect(uuid.length).toEqual(19);
    expect(uuid).toMatch(/^[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}$/);
    expect(service.storage.set).toHaveBeenCalledWith(config.uuid, uuid);
  });

  it('should return existing UUID if it is in local storage', () => {
    spyOn(service.storage, 'get').and.returnValue('existing-uuid');
    spyOn(service.storage, 'set').and.stub();

    const uuid = service.generateUUID();

    expect(uuid).toEqual('existing-uuid');
    expect(service.storage.set).not.toHaveBeenCalled();
  });
});