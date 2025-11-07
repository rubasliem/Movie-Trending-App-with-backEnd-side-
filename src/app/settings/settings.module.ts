import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './SettingsComponent/profile/profile.component';
import { SettingsComponent } from './SettingsComponent/settings/settings.component';
import { PasswordComponent } from './SettingsComponent/password/password.component';
import { PrivaceComponent } from './SettingsComponent/privace/privace.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ProfileComponent,
    SettingsComponent,
    PasswordComponent,
    PrivaceComponent
  ]
})
export class SettingsModule { }
