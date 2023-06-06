import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cabinet-nav',
  templateUrl: './cabinet-nav.component.html',
  styleUrls: ['./cabinet-nav.component.scss'],
  host: {class: 'cabinet-nav'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CabinetNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
