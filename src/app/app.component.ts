import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {class: 'app'},
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(private _authService: AuthService){}

  ngOnInit(): void {
    const potentialToken = localStorage.getItem('auth-token')

    if (potentialToken !== null) {
      this._authService.setToken(potentialToken)
    }
  }
}
