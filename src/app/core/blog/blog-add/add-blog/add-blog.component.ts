import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddBlogComponent {
  addForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
    ]),
    description: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    image: new FormControl(new File([], '')),
  });

  imagePreview: string | ArrayBuffer | null = null;
  preview: boolean = false;

  onSubmit() {
    this.preview = true;
    //handle form submission
  }

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.addForm.patchValue({ image: file });
      this.addForm.get('image')?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.preview = true;
      };
      reader.readAsDataURL(file);
    }
  }
}
