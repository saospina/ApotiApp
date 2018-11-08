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
      'Authorization': 'Bearer BQDAkL9Otku-U9O1Jc82cWD84uv7ttNnZJcBsFf-rZf4bpPmh6q8LmY8EEd1tKzwEz2IAaYUvvouSLm02wltNMJ2Mb4LuJupZayLGT6kn3nk4BHec8oZ8n8si3Dw7GxE60iY15ytDot0sqaR6g'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
    // subscribe(data => {
    //   console.log(data);

    // });

  }
  getArtista( termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDAkL9Otku-U9O1Jc82cWD84uv7ttNnZJcBsFf-rZf4bpPmh6q8LmY8EEd1tKzwEz2IAaYUvvouSLm02wltNMJ2Mb4LuJupZayLGT6kn3nk4BHec8oZ8n8si3Dw7GxE60iY15ytDot0sqaR6g'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers });

  }

}
