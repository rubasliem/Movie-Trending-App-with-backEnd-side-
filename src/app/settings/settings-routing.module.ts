import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './SettingsComponent/profile/profile.component';
import { PasswordComponent } from './SettingsComponent/password/password.component';
import { PrivaceComponent } from './SettingsComponent/privace/privace.component';
import { SettingsComponent } from './SettingsComponent/settings/settings.component';

const routes: Routes = [
  {path:'',component:SettingsComponent},
  {path:'password',component:PasswordComponent},
  {path:'privace',component:PrivaceComponent},
  {path:'profile',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { 

}
