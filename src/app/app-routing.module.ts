import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { RegisterPageComponent } from './components/register-page/register-page.component'
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component'
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component'
import { AuthGuard } from './shared/classes/auth.guard'
import { CabinetComponent } from './components/cabinet/cabinet.component'

const routes: Routes = [
    {path: '', component: AuthLayoutComponent, children: [
       { path: '', redirectTo: '/login', pathMatch: 'full'},
       { path: 'login', component: LoginPageComponent},
       { path: 'register', component: RegisterPageComponent}
    ]},
    {path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
        { path: '', redirectTo: '/cabinet', pathMatch: 'full'},
        { path: 'cabinet', component: CabinetComponent}
    ]}
]

@NgModule({

    imports: [
      RouterModule.forRoot(routes)  
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}