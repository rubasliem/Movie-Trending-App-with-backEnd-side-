import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServicesService {

 private theme = new BehaviorSubject<string>(
    localStorage.getItem('theme') || 'light'
  );
  public theme$ = this.theme.asObservable();

  constructor() { 
    
    this.applyTheme(this.theme.getValue());
  }

  
  toggleTheme() {
    const newTheme = this.theme.getValue() === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    this.theme.next(newTheme);
    this.applyTheme(newTheme);
  }
  private applyTheme(theme: string){
    if(theme === 'dark'){
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }
}