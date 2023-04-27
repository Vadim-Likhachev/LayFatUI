import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {class: 'register-page'},
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup
  aSub: Subscription
  
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    if(this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  register(): void {
    this.form.disable()

    this.aSub = this._authService.register(this.form.value).subscribe(
      () => this._router.navigate(['/login'], {
        queryParams: {
          registered: true
        }
      }),
      error => {
        console.log(error)
        this.form.enable()
      })
  }
}
