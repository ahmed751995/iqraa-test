import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../components/image-list/Image';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:5000/images';
  
  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl);
  }

  getImage(id: number): Observable<Image> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Image>(url);
  }
}
