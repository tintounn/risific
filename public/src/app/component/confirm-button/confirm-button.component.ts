import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.css']
})
export class ConfirmButtonComponent implements OnInit {

  @Input('type') type: string;
  @Output('confirmed') confirmedEvent: EventEmitter<any> = new EventEmitter();
  @Output('canceled') canceledEvent: EventEmitter<any> = new EventEmitter();

  public htmlClass: string;

  constructor() { }

  ngOnInit() {
    if(this.type == 'danger') this.htmlClass = "btn-danger";
  }

  confirm() {
    this.confirmedEvent.emit();
  }

  cancel() {
    this.canceledEvent.emit();
  }
}
