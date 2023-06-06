import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetHeaderComponent } from './components/cabinet-header/cabinet-header.component';
import { CabinetComponent } from './cabinet.component';
import { CabinetNavComponent } from './components/cabinet-nav/cabinet-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CabinetHeaderComponent,
    CabinetComponent,
    CabinetNavComponent,
    ProfileComponent
  ],
  exports: [CabinetComponent],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    FormsModule 
  ]
})
export class CabinetModule { }
