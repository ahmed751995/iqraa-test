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
  id!: string;
  image!: Image;
  
  constructor(private route: ActivatedRoute, private router: Router,
	      private imageService:ImageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '-1';
    console.log("here ", this.id)
    this.imageService.getImage(parseInt(this.id))
      .subscribe(
	image => {
	this.image = image
	},
	eror => {
	  this.router.navigate(['/images'])
	});
  }

}
