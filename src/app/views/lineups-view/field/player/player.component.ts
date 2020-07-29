import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  constructor() {}
  dragPosition = { x: 0, y: 0 };

  changePosition() {
    this.dragPosition = {
      x: this.dragPosition.x + 50,
      y: this.dragPosition.y + 50,
    };
  }

  ngOnInit(): void {}

  players = [
    {
      title: 'Name',
      poster: 'assets/Images/Icons/player-1.png',
    },
  ];

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);
  }
}
