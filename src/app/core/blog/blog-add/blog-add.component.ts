import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { BlogService } from '../../../services/blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-blog',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class BlogAddComponent {
  blog = signal({
    id: 0,
    title: '',
    content: '',
    images: [] as { id: number; image: string }[],
    created_at: new Date().toISOString(),
    updated_at: '', 
    comments_count: 0, 
    likes_count: 0, 
    //default values for the blog object so that we can call the details component safely
  });
  uploadedImages: File[] = [];
  maxImages = 5;
  previewMode = signal(false);

  constructor(
    private blogService: BlogService,
    private toastr : ToastrService
  ) {}

  addForm = new FormGroup({
    title: new FormControl<string | null>('', [
      Validators.required,
      Validators.maxLength(25),
    ]),
    content: new FormControl<string | null>('', [Validators.required]),
    images: new FormControl<File[] | null>([]),
  });

  onSubmit() {
    console.log('Blog submitted:', this.blog());
    // Handle form submission logic
    const formData = new FormData();
    formData.append('title', this.blog().title);
    formData.append('content', this.blog().content);
    //iterate over the images and append them to the form data
    this.uploadedImages.forEach((image) => {
      formData.append('images', image);
    });
    this.blogService.createPost(formData).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success('Blog post added successfully');
        //reset the form
        this.uploadedImages = [];
        this.addForm.reset();
        //remove the images from the uploaded images array
        //reset the blog object
        // this.router.navigate(['/blog']);
      },
      (error) => {
        this.toastr.error('Error adding blog post');
        console.log(error);
      }
    );
  }

  onPreview() {
    this.previewMode.set(!this.previewMode());
    console.log(this.previewMode());
    
  }

  onImagesUpload(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files) {
      const filesArray = Array.from(fileInput.files);
  
      if (this.uploadedImages.length + filesArray.length > this.maxImages) {
        alert(`You can upload a maximum of ${this.maxImages} images.`);
        return;
      }
  
      const newImages = filesArray.map((file, index) => ({
        id: Date.now() + index, // just a simple unique id generator
        image: URL.createObjectURL(file),
      }));
  
      this.uploadedImages = [...this.uploadedImages, ...filesArray];
      this.blog.update((current) => ({
        ...current,
        images: [...current.images, ...newImages],
      }));
      this.addForm.patchValue({ images: this.uploadedImages });
    }
  }
  

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
    this.blog.update((current) => ({
      ...current,
      images: current.images.filter((_, i) => i !== index),
    }));
    this.addForm.patchValue({ images: this.uploadedImages });
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }
  onTitleChange(title: string | null | undefined) {
    this.blog.update((b) => ({ ...b, title: title || '' }));
  }
  
  onContentChange(content: string | null | undefined) {
    this.blog.update((b) => ({ ...b, content: content || '' }));
  }
}
