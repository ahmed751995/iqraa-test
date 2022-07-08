import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../image-list/Image';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  id!: string;
  title: string = '';
  date!: number;
  imageUrl: string = '';
  
  constructor(private route: ActivatedRoute, private router: Router,
	      private imageService: ImageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '-1';
    if(this.id !== '-1') {
      // this.imageService.getImage(parseInt(this.id)).subscribe(image => {
      // 	this.title = image.title;
      // 	this.date = image.date;
      // 	this.imageUrl = image.imageUrl;
      // })
    }
  }

  onSubmit() {
    if(this.id === '-1') {
      const image: Image = {
	title: this.title,
	date: this.date,
	imageUrl: this.imageUrl
      }
      // this.imageService.insertImage(image).subscribe((image) => {
      // 	this.router.navigate(['/images/${image.id}'])
      // })
      this.imageService.insertImage(image).then(resp => console.log(resp));
    } else {
      console.log('edit image')
    }
  }

}
