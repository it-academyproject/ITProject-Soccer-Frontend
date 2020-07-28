// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lineups-view',
  templateUrl: './lineups-view.component.html',
  styleUrls: ['./lineups-view.component.css'],
})
// export class LineupsViewComponent implements OnInit {
export class LineupsViewComponent {
  // listOne = ['A - 1', 'A - 2', 'A - 3', 'A - 4'];
  // listTwo = ['B - 1', 'B - 2', 'B - 3', 'B - 4'];

  constructor() {}

  // drop(event: CdkDragDrop<string[]>) {
  //   console.log('event: ', event);
  // }

  dragPosition = { x: 0, y: 0 };

  changePosition() {
    this.dragPosition = {
      x: this.dragPosition.x + 50,
      y: this.dragPosition.y + 50,
    };
  }

  // ngOnInit(): void {}
}
