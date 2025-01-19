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
  constructor(private router : Router){}

  Login(){
    this.router.navigate(['/login']);
  }

}
