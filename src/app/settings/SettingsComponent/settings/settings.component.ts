import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  settingsForm: FormGroup;

  constructor(private fb: FormBuilder ,private _Router:Router) {
    this.settingsForm = this.fb.group({
      darkMode: [false],
      notifications: [true],
      language: ['en']
    });
  }

  saveSettings() {
    const values = this.settingsForm.value;
    console.log('Saved settings:', values);
    // هنا يمكنك تنفيذ حفظ الإعدادات في سيرفر أو محلياً
  }

    home(){
    this._Router.navigate(['/'])
  }

}
