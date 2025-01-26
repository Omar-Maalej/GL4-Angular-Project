import { Component } from '@angular/core';
import { AsideComponent } from '../../layout/admin/aside/aside.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [AsideComponent, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  standalone: true,
})
export class AdminComponent {}
