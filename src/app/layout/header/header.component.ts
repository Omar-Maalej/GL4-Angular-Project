import { CommonModule } from '@angular/common';
import { Component, effect, Injectable, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Injectable({ providedIn: 'root' })


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone : true
})
export class HeaderComponent {
    

  isLoggedInSignal = signal<boolean>(!!localStorage.getItem('access_token'));
  constructor(private router: Router) {
    // Effect to debug or respond to changes in isLoggedInSignal
    effect(() => {
      console.log('isLoggedInSignal changed:', this.isLoggedInSignal());
    });
  }




  login(){
    this.router.navigate(['/login']);
  }
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.isLoggedInSignal.set(false);
    this.router.navigate(['/login']);

  }
  
  


}
