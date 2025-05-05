import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';

import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-createroom',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './createroom.component.html',
  styleUrl: './createroom.component.scss',
})
export class CreateroomComponent {
  roomId = '';
  constructor(private socket: SocketService, private router: Router) {}
  createRoom() {
    const newRoomId = Math.random().toString(36).substr(2, 5);
    this.socket.emit('create_room', newRoomId);
    this.socket.on('room_created', (id: string) => {
      this.router.navigate(['/room', id]);
    });
  }

  joinRoom() {
    this.socket.emit('join_room', this.roomId);
    this.socket.on('start_game', () => {
      this.router.navigate(['/room', this.roomId]);
    });

    this.socket.on('room_full', () => alert('Room is full'));
  }
}
