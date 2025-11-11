import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeServicesService } from '../../../theme-services.service';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {

   settingsForm!: FormGroup;

  constructor(private fb: FormBuilder, private _Router: Router   ,private _ThemeService :ThemeServicesService) {}


  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      theme: ['normal'],
      notifications: [true],
      language: ['en']
    });
  }
  //   // تطبيق الثيم المحفوظ في localStorage
  //   const savedTheme = localStorage.getItem('appTheme') || 'normal';
  //   this.applyTheme(savedTheme);
  //   this.settingsForm.patchValue({ theme: savedTheme });
  // }

  // changeTheme(event: any) {
  //   const selectedTheme = event.target.value;
  //   this.applyTheme(selectedTheme);
  //   localStorage.setItem('appTheme', selectedTheme);
  // }

  // applyTheme(theme: string) {
  //   document.body.classList.remove( 'normal-theme','light-theme', 'dark-theme');
  //   document.body.classList.add(`${theme}-theme`);
  // }

  // saveSettings() {
  //   console.log(this.settingsForm.value);


  home() {
    this._Router.navigate(['/']);
  }
}