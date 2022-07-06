import { Component, OnInit } from '@angular/core';
import { Image } from '../image-list/Image';
@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  title: string = '';
  date!: number;
  imageUrl: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const image: Image = {
      title: this.title,
      date: this.date,
      imageUrl: this.imageUrl
    }
    console.log(image)
  }

}
