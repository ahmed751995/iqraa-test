import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../components/image-list/Image';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addDoc, Firestore, collection, getDocs, doc, getDoc } from '@angular/fire/firestore';

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
  private dbInstance = collection(this.firestore, 'image');

  
  constructor(private http: HttpClient, public firestore: Firestore) { }

  getImages(){
    return getDocs(this.dbInstance)
      .then((response) => response.docs.map(image => {
	return {title: image.data()['title'], id: image['id']}
      }))
  } 

  // : Observable<Image[]> {
  //   return this.http.get<Image[]>(this.apiUrl);
  // }
  getImage(id: string) {
    return getDoc(doc(this.firestore, 'image', id))
      .then(resp => {
	if(resp.exists()) return {...resp.data(), id: resp.id}
	else return {'success': false, 'id': '-1'}
      })
      // .then(resp => console.log(resp.data()))
  // : Observable<Image> {
  //   const url = `${this.apiUrl}/${id}`
  //   return this.http.get<Image>(url);
  }

  deleteImage(id: number): Observable<Image> {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Image>(url)
  }

  insertImage(image: Image) {    
    return addDoc(this.dbInstance, image);
      // .then(() => {
      // 	console.log('done');
      // })
      // .catch((err) => {
      // 	console.log(err.message);
      // })
  }
}
