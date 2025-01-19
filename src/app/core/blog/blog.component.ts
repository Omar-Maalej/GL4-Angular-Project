import { Component } from '@angular/core';
import { BlogCardComponent } from "./blog-card/blog-card.component";
import { SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog',
  imports: [BlogCardComponent, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  searchQuery: string = '';

  blogs: Blog[] = [
    {
      id: 1,
      title: 'The Ultimate Guide to Fitness',
      date: 'July 20, 2025',
      description: 'Discover the best tips to stay in shape and achieve your fitness goals.',
      content: 'Full article content goes here...',
      image: 'assets/blog1.jpg',
      author: {
        firstname: 'Sarah',
        lastname: 'Johnson',
        email: 'sarah@example.com',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Sarah%20Johnson'
      },
      comments: []
    },
    {
      id: 2,
      title: '10 Best Exercises for Weight Loss',
      date: 'August 5, 2025',
      description: 'These exercises will help you burn fat and stay in great shape!',
      content: 'Full article content goes here...',
      image: 'assets/blog2.jpg',
      author: {
        firstname: 'Michael',
        lastname: 'Brown',
        email: 'michael@example.com',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Michael%20Brown'
      },
      comments: []
    },
    {
      id: 3,
      title: 'Healthy Eating: What You Need to Know',
      date: 'September 12, 2025',
      description: 'Learn how to create a balanced diet for a healthier lifestyle.',
      content: 'Full article content goes here...',
      image: 'assets/blog3.jpg',
      author: {
        firstname: 'Emily',
        lastname: 'Davis',
        email: 'emily@example.com',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Emily%20Davis'
      },
      comments: []
    },
    {
      id: 4,
      title: '10 Best Exercises for Weight Loss',
      date: 'August 5, 2025',
      description: 'These exercises will help you burn fat and stay in great shape!',
      content: 'Full article content goes here...',
      image: 'assets/blog2.jpg',
      author: {
        firstname: 'Michael',
        lastname: 'Brown',
        email: 'michael@example.com',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Michael%20Brown'
      },
      comments: []
    },
    {
      id: 5,
      title: 'Healthy Eating: What You Need to Know',
      date: 'September 12, 2025',
      description: 'Learn how to create a balanced diet for a healthier lifestyle.',
      content: 'Full article content goes here...',
      image: 'assets/blog3.jpg',
      author: {
        firstname: 'Emily',
        lastname: 'Davis',
        email: 'emily@example.com',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Emily%20Davis'
      },
      comments: []
    }
  ];
}
