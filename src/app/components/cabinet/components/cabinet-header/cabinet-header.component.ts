import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinet-header',
  templateUrl: './cabinet-header.component.html',
  styleUrls: ['./cabinet-header.component.scss'],
  host: {class: 'cabinet-header'}
})
export class CabinetHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
