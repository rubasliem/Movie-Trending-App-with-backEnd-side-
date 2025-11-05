import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // 🧩 العنوان الأساسي للسيرفر
  private readonly baseUrl = 'http://localhost:5000/api/users';

  // 💬 BehaviorSubject لتخزين اسم المستخدم ومشاركته بين المكونات
  private userNameSource = new BehaviorSubject<string>(this.getStoredUserName());
  userName$ = this.userNameSource.asObservable();

  constructor(private _HttpClient: HttpClient) {}

  // 📝 تسجيل مستخدم جديد
  signup(userData: object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/signup`, userData);
  }

  // 🔑 تسجيل الدخول
  signin(userData: object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/signin`, userData);
  }

  // 💾 حفظ اسم المستخدم وتحديث الحالة المشتركة
  setUserName(name: string): void {
    this.userNameSource.next(name);
    localStorage.setItem('userName', name); // حفظ الاسم بعد تسجيل الدخول
  }

  // 📤 الحصول على الاسم الحالي (لو محتاجاه مباشرة)
  getUserName(): string {
    return this.userNameSource.value;
  }

  // 🧹 تسجيل الخروج (تنظيف البيانات)
  logout(): void {
    this.userNameSource.next('');
    localStorage.removeItem('userName');
  }

  // 🧠 جلب الاسم المخزون من localStorage
  private getStoredUserName(): string {
    return localStorage.getItem('userName') || '';
  }
}
