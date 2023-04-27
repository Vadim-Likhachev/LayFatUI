import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  host: {class: 'login-page'},
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit, OnDestroy {

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

    this._route.queryParams.subscribe((params: Params) => {
      if(params['registerd']) {
        //Теперь вы можете зайти в систему используя свои данные
      } else if (params['accessDenied']) {
        // Сначала авторизуйтесь в системе
      }
    })
  }

  auth(): void {
    this.form.disable()

    this.aSub = this._authService.login(this.form.value).subscribe(
      () => this._router.navigate(['/cabinet']),
      error => {
        console.log(error)
        this.form.enable()
      })
  }
 }
