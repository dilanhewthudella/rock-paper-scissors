import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plauground',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './plauground.component.html',
  styleUrl: './plauground.component.scss',
})
export class PlaygroundComponent implements OnInit {
  roomId!: string;
  myChoice = '';
  opponentChoice = '';
  result = '';
  constructor(private route: ActivatedRoute, private socket: SocketService) {}

  ngOnInit(): void {
    // Initialization logic here
    this.roomId = this.route.snapshot.paramMap.get('id')!;
    this.socket.on('result', (data: any) => {
      const ids = Object.keys(data.choices);
      const me = this.socket.socket.id;
      const other = ids.find((id) => id !== me);

      if (me && other) {
        this.myChoice = data.choices[me];
        this.opponentChoice = data.choices[other];
      }

      this.result =
        data.winner === 'draw'
          ? 'Draw'
          : (data.winner === 'p1' && ids[0] === me) ||
            (data.winner === 'p2' && ids[1] === me)
          ? 'You Win!'
          : 'You Lose!';
    });
  }

  choose(choice: string) {
    this.myChoice = choice;
    this.socket.emit('player_choice', { roomId: this.roomId, choice });
  }
  reset() {
    this.myChoice = '';
    this.opponentChoice = '';
    this.result = '';
  }
}
