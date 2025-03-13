import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() name: string = '';
  @Input() btnClass: string = '';
  @Input() productId: number = 0;
  @Output() onclick = new EventEmitter<number>();
  constructor() {}
  ngOnInit(): void {}

  emitEvent() {
    this.onclick.emit(this.productId);
  }
}
