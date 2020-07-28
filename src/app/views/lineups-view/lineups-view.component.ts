// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lineups-view',
  templateUrl: './lineups-view.component.html',
  styleUrls: ['./lineups-view.component.css'],
})
// export class LineupsViewComponent implements OnInit {
export class LineupsViewComponent {
  constructor() {}
  dragPosition = { x: 0, y: 0 };

  changePosition() {
    this.dragPosition = {
      x: this.dragPosition.x + 50,
      y: this.dragPosition.y + 50,
    };
  }

  ngOnInit(): void {}
  // }

  players = [
    {
      title: 'Player',
      poster: 'assets/Images/Icons/player-1.png',
    },
  ];
  // tslint:enable:max-line-length

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);
  }
}
