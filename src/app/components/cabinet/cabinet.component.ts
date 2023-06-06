import { ChangeDetectionStrategy, ViewEncapsulation, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss'],
  host: {class: 'cabinet'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CabinetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
