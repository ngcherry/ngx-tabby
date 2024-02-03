import { animate, style, transition, trigger } from '@angular/animations';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  inject,
} from '@angular/core';
import { NgxTabbyItem } from '../ngx-tabby-item/ngx-tabby-item.component';
import { NgxTabbyService } from '../ngx-tabby.service';

@Component({
  selector: 'ngx-tabby-group',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './ngx-tabby-group.component.html',
  styleUrl: './ngx-tabby-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgxTabbyService],
  animations: [
    trigger('tabAnimation', [
      transition(':decrement', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':increment', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class NgxTabbyGroup {
  @ContentChildren(NgxTabbyItem)
  tabs!: QueryList<NgxTabbyItem>;

  tabsState = inject(NgxTabbyService);
}
