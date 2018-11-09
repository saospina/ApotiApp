import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Service done');
  }

  getQuery( query: string ) {
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBzWbJ76ql3XtP1uHGg0iqdkJcHEm_KNUU-OlLNzbKLtQ-pHnPa1NF4iR_4leQLFl9SYPGInU7LYQJtDPA'
    });

    return this.http.get( URL, { headers });

  }



  getNewReleases() {


    return this.getQuery( 'browse/new-releases?limit=20' ).pipe( map( data => {
        return data['albums'].items;
      }));
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAg48dL39RcgEEB7GikSp37IpJAYJB6NG2jBr_O-8_bgPASLTVdCjFCn7tHe4yFn5Wphiu5C-wAidrWV2U'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).pipe( map( data => {
    //   return data['albums'].items;
    // }));
    // subscribe(data => {
    //   console.log(data);

    // });

  }
  getArtista( termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBzWbJ76ql3XtP1uHGg0iqdkJcHEm_KNUU-OlLNzbKLtQ-pHnPa1NF4iR_4leQLFl9SYPGInU7LYQJtDPA'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers })
    .pipe( map ( data => data['artists'].items));

  }

}
