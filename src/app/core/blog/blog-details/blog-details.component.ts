import { Component } from '@angular/core';
import { Blog } from '../../../models/blog';
import { BlogService } from '../../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../models/post.model';
import { CommonModule } from '@angular/common';
import { PostDetails } from '../../../models/post-details.model';
import { BlogCommentsComponent } from '../blog-comments/blog-comments.component';

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule, BlogCommentsComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {

  id!: string;
  blog!: PostDetails;
  
  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.blogService.getPost(Number(this.id)).subscribe(
      (data) => {
        console.log(data);
        this.blog = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  formatDate(date: string): string {
    return new Date(date).toDateString()
  }

  //get id from the route



  // blog: Blog = {
  //   id: 1,
  //   title: 'How to Improve Your Fitness Routine',
  //   author: {
  //     firstname: 'Sarah',
  //     lastname: 'Doe',
  //     email: 'sarah@example.com',
  //   },
  //   date: 'January 10, 2025',
  //   description: 'A complete guide to optimizing your workouts and fitness habits.',
  //   content: `Fitness is not just about exercise; it’s a lifestyle. 
  //   Incorporate strength training, cardio, and flexibility workouts into your routine. 
  //   \n
  //   Nutrition plays a crucial role. Eat balanced meals with proteins, healthy fats, and good carbs.
  //   Hydration is essential; drink at least 8 glasses of water daily.`,
  //   image: 'https://source.unsplash.com/800x600/?fitness',
  // };

}
