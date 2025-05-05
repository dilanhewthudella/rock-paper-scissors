import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket!: Socket;
  constructor() {
    this.socket = io('http://localhost:3000');
  }
  on(event: string, callback: (...args: any[]) => void) {
    this.socket.on(event, callback);
  }

  emit(event: string, data?: any) {
    this.socket.emit(event, data);
  }
}
