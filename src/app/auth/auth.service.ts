import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = []; // Temporary storage

  constructor(private router: Router) { }

  register(user: {email: string, password: string}) {
    this.users.push(user);
    alert('Registration successful!');
    this.router.navigate(['/login']);
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/home']);
      return true;
    }
    alert('Invalid credentials!');
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
