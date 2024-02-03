import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  computed,
  inject,
  input,
} from '@angular/core';
import { NgxTabbyBody } from '../directives/ngx-tabby-body.directive';
import { NgxTabbyHeader } from '../directives/ngx-tabby-header.directive';
import { NgxTabbyService } from '../ngx-tabby.service';

@Component({
  selector: 'ngx-tabby-item',
  standalone: true,
  imports: [],
  templateUrl: './ngx-tabby-item.component.html',
  styleUrl: './ngx-tabby-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTabbyItem {
  @ContentChild(NgxTabbyHeader)
  tabHeader: NgxTabbyHeader | undefined;

  @ContentChild(NgxTabbyBody)
  tabBody: NgxTabbyBody | undefined;

  label = input<string>();

  tabsState = inject(NgxTabbyService);

  tabId = this.tabsState.addTab();

  isSelected = computed(() => this.tabsState.isSelected(this.tabId));
}
