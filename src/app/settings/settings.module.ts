import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './SettingsComponent/settings/settings.component';
import { PasswordComponent } from './SettingsComponent/password/password.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { PrivaceComponent } from './SettingsComponent/privace/privace.component';
import { ProfileComponent } from './SettingsComponent/profile/profile.component';
import { ThemeServicesService } from '../theme-services.service';


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
