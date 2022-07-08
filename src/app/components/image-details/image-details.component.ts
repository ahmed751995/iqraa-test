import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../image-list/Image';
import { images } from '../image-list/images'
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  id: string = '';
  image!: any;
  
  constructor(private route: ActivatedRoute, private router: Router,
	      private imageService:ImageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '-1';
    this.imageService.getImage(this.id)
      .then(data => {
	console.log(data['id'])
	this.image = data
      })
      // .subscribe(
      // 	image => {
      // 	this.image = image
      // 	},
      // 	eror => {
      // 	  this.router.navigate(['/images'])
      // 	});
  }

  onDeleteImage(): void {
    this.imageService.deleteImage(parseInt(this.id)).subscribe(() => this.router.navigate(['/images']))
  }

}
