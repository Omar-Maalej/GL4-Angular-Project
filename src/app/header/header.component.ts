import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone : true
})
export class HeaderComponent {
  isLoggedIn : boolean = false;
  constructor(private router : Router){}

  toggleLogin(){
    this.isLoggedIn = !this.isLoggedIn;
  }

}
