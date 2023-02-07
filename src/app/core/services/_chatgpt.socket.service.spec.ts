import { SocketService } from './socket.service';

import { BaseMessage } from "@core/interfaces/base-message";

describe('SocketService', () => {
  let service: SocketService;
  
  beforeEach(() => {
    service = new SocketService();
    service.PIE_API_KEY = 'testKey';
    service.websocket = {
      onmessage: null,
      onerror: null,
      send: jasmine.createSpy()
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the API key', () => {
    const newKey = 'newKey';
    service.setApiKey(newKey);
    expect(service.PIE_API_KEY).toBe(newKey);
  });

  it('should create the pie socket URL', () => {
    const url = service.getPieSocketUrl(service.PIE_CLUSTER_ID, service.PIE_CHANNEL_ID, service.PIE_API_KEY);
    expect(url).toBe(`wss://${service.PIE_CLUSTER_ID}.piesocket.com/v3/${service.PIE_CHANNEL_ID}?api_key=${service.PIE_API_KEY}&notify_self`);
  });

  it('should connect to the web socket', () => {
    service.connectWebSocket(WebSocket);
    expect(service.websocket instanceof WebSocket).toBeTruthy();
  });

  it('should get messages of the specified type', () => {
    const message: BaseMessage = {
      type: 'testType',
      payload: {}
    };
    const spy = spyOn(service.websocket, 'onmessage');
    const sub = service.messagesOfType('testType').subscribe((event: BaseMessage) => {
      expect(event).toEqual(message);
    });
    spy.and.callFake((event: MessageEvent) => {
      service.websocket.onmessage(event);
    });
    spy.and.callThrough();
    service.websocket.onmessage({ data: JSON.stringify(message) });
    sub.unsubscribe();
  });

  it('should handle errors', () => {
    const spy = spyOn(service.websocket, 'onerror');
    const sub = service.errorHandler().subscribe((event: Event) => {
      expect(event).toEqual({} as Event);
    });
    spy.and.callFake((event: Event) => {
      service.websocket.onerror(event);
    });
    spy.and.callThrough();
    service.websocket.onerror({} as Event);
    sub.unsubscribe();
  });

  it('should publish a message', () => {
    const message: BaseMessage = {
      type: 'testType',
      payload: {}
    };
    service.publish(message);
    expect(service.websocket.send).toHaveBeenCalledWith(JSON.stringify(message));
  });
});
