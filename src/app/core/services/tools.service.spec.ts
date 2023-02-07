
import { LocalstorageService } from './localstorage.service';

import { ToolsService } from './tools.service';

describe('ToolsService', () => {
  let service: ToolsService;

  beforeEach(() => {
    service = new ToolsService(new LocalstorageService());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects "generateUUID" to generate a uniue string', () => {
    const result: string = service.generateUUID();
    expect(result).not.toEqual('xxxx-xxxx-xxxx-xxxx');
    expect(result.length).toEqual(19);
  });
});
