import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path: 'cabinet', component: CabinetComponent, children: [
    {path: '', redirectTo: '/profile', pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent},
  ]},
  

]



@NgModule({
  imports: [
    RouterModule.forRoot(routes),  
    CommonModule
  ],
  exports: [RouterModule]
})
export class CabinetRoutingModule { }
