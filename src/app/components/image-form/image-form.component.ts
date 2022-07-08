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
  id: string = '-1';
  title: string = '';
  date!: number;
  imageUrl: string = '';
  
  constructor(private route: ActivatedRoute, private router: Router,
	      private imageService: ImageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '-1';
    if(this.id !== '-1') {
      this.imageService.getImage(this.id)
	.then(image => {
	  this.id = image.id!;
	  this.title = image.title!;
	  this.date = image.date!;
	  this.imageUrl =image.imageUrl!;
	})
      // this.imageService.getImage(parseInt(this.id)).subscribe(image => {
      // 	this.title = image.title;
      // 	this.date = image.date;
      // 	this.imageUrl = image.imageUrl;
      // })
    }
  }

  onSubmit() {
    const image: any = {
      id: this.id,
      title: this.title,
      date: this.date,
      imageUrl: this.imageUrl
    }
    if(this.id === '-1') {
      // this.imageService.insertImage(image).subscribe((image) => {
      // 	this.router.navigate(['/images/${image.id}'])
      // })
      this.imageService.insertImage(image).then(resp => console.log(resp));
    } else {
      this.imageService.editImage(image)
	.then(() => this.router.navigate([`/images/${image.id}`]))
	.catch(err => console.log(err))
    }
  }

}
