import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../components/image-list/Image';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addDoc, Firestore, collection, getDocs, doc, getDoc,deleteDoc, updateDoc }
from '@angular/fire/firestore';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class ImageService {
  private apiUrl = 'http://localhost:5000/images';
  private image_db = collection(this.firestore, 'image');
  item$!: Observable<any>;
  
  constructor(private http: HttpClient, public firestore: Firestore) {}
  
  async getImages(){ // you can use async with await or just use it read about async first
    
    return await getDocs(this.image_db)
      .then((response) => response.docs.map(image => {
	return {title: image.data()['title'], id: image['id']}
      }))
  } 

  // : Observable<Image[]> {
  //   return this.http.get<Image[]>(this.apiUrl);
  // }
  getImage(id: string) {
    return getDoc(doc(this.image_db, id))
      .then(resp => {
	if(resp.exists()) return {...resp.data(), id: resp.id}
	else return {'success': false, 'id': '-1', 'title': '', 'date': 0, 'imageUrl': ''}
      })
      // .then(resp => console.log(resp.data()))
  // : Observable<Image> {
  //   const url = `${this.apiUrl}/${id}`
  //   return this.http.get<Image>(url);
  }

  deleteImage(id: string) {
    return deleteDoc(doc(this.image_db, id))
  }

  // : Observable<Image> {
  //   const url = `${this.apiUrl}/${id}`
  //   return this.http.delete<Image>(url)
  // }

  insertImage(image: Image) {    
    return addDoc(this.image_db, image);
      // .then(() => {
      // 	console.log('done');
      // })
      // .catch((err) => {
      // 	console.log(err.message);
      // })
  }

  editImage(image: any) {
    return updateDoc(doc(this.image_db, image.id), image)
  }
}
