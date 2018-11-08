import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Service done');
    
  }
  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDB_bVfwZZBc2M5UbdtwQfXSIjpD1mpLfugaYlX9KdMuSP5TebGV91RYHWdufUn7Wj0QZXIk-kouaKvuuDK4AiolN-NVL20140cbw3TIUM9fVsKwIZpV2OSW5oN4-PDZnGRDVeDWoyhCwq9Ww'
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).subscribe( data => {
      console.log( data );
      
    })

  }
}
