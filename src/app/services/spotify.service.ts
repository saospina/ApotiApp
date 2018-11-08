import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Service done');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD07PSlr5BuBwYikkduEwpGriUT3wyruQS_AaUfxoIRY6wZq9QE5w5VOsGBk-VscuafSxN99trdXzR6jxI'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
    // subscribe(data => {
    //   console.log(data);

    // });

  }
}
