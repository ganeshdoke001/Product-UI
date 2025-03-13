import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardHeader: string = '';
  @Input() content!: TemplateRef<any>;
  @Input() bname: string = '';
  @Input() btnClass: string = '';
  @Output() onPrimary = new EventEmitter<string>();
  onClick() {
    this.onPrimary.emit('card');
  }

  addProduct(id: number) {
    this.onPrimary.emit('card');
  }
}
