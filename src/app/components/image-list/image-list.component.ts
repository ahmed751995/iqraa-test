import { Component, OnInit } from '@angular/core';
import { Image } from './Image';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images!:any;
  constructor( private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImages()
      .then(images => this.images = images);
      // .then(images => this.images = images)
      // .catch((err) => console.log(err))
    // .subscribe(images => this.images = images);
    // setTimeout(() => console.log(this.imageService.getImages()), 1000)
  } 

}
