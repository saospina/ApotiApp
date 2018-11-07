import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Service done');
    
  }
  getNewReleases(){
    this.http.get('https://api.spotify.com/v1/browse/new-releases').subscribe

  }
}
