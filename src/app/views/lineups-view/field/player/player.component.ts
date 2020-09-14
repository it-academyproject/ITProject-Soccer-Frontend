import { Component, OnInit } from '@angular/core';
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  // @Output()
  // notify: EventEmitter<any> = new EventEmitter<any>();

  // passData() {
  //   this.notify.emit('this message is from Child component');
  // }

  constructor() {}

  ngOnInit(): void {}
}
