import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent {
  currentSlide = 0;

  changeSlide(direction: number): void {
    const totalSlides = 2; // Update this number if you add more slides
    this.currentSlide =
      (this.currentSlide + direction + totalSlides) % totalSlides;
  }
}
