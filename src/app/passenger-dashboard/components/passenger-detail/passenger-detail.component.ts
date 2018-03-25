import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  templateUrl: './passenger-detail.component.html'
})
export class PassengerDetailComponent implements OnChanges, OnInit {

  @Input() detail: Passenger;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  editing: boolean: false;

  constructor() {}

  ngOnInit() {

  }

  onNameChange(value: string) {
    //console.log('value ', value);
    this.detail.fullname = value;

  }

  ngOnChanges(changes) {
    //console.log('changes ', changes);
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue );
    }

  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}
