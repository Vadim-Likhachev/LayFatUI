import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  host: {class: 'profile'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  showSubmitBlock = false;

  constructor() { }

  ngOnInit(): void {
  }

  showSubmit(): void {
    this.showSubmitBlock = true;
  }

  hideSubmit(): void {
    this.showSubmitBlock = false;
  }

  submit(form: NgForm) {
    console.log(form.value);
    
  }
}
