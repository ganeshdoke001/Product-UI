import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-less',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more-less.component.html',
  styleUrl: './more-less.component.scss',
})
export class MoreLessComponent {
  @Input() text: string = '';
  @Input() limit: number = 0;
  showMore: boolean = false;

  showLess() {
    this.showMore = false;
  }
  show() {
    this.showMore = true;
  }
}
