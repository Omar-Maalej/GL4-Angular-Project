import { Component } from '@angular/core';
import { Blog } from '../../../models/blog';

@Component({
  selector: 'app-blog-details',
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  blog: Blog = {
    id: 1,
    title: 'How to Improve Your Fitness Routine',
    author: {
      firstname: 'Sarah',
      lastname: 'Doe',
      email: 'sarah@example.com',
    },
    date: 'January 10, 2025',
    description: 'A complete guide to optimizing your workouts and fitness habits.',
    content: `Fitness is not just about exercise; it’s a lifestyle. 
    Incorporate strength training, cardio, and flexibility workouts into your routine. 
    \n
    Nutrition plays a crucial role. Eat balanced meals with proteins, healthy fats, and good carbs.
    Hydration is essential; drink at least 8 glasses of water daily.`,
    image: 'https://source.unsplash.com/800x600/?fitness',
  };

}
