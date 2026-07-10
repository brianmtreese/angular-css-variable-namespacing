import {Component, signal} from '@angular/core';

@Component({
  selector: 'support-widget',
  templateUrl: './support-widget.html',
  styleUrl: './support-widget.css',
})
export class SupportWidget {
  protected readonly open = signal(false);

  protected toggle(): void {
    this.open.update((open) => !open);
  }
}
