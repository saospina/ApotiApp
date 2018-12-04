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

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDpVREMKWdnODjsC4R1gNfphC3r2_TNRNzNUfdXAK0QC72S83_9NthX5A0uHIygTQJq6Kv5wjTqy3xEz7U'
    });

    return this.http.get(URL, { headers });
  }



  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => {
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
  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(map(data => {
      return data['artists'].items;
    }));


    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQD7luP6w7qL7_qbwPk_m66pu4PL68zFWlSXle1a9CVzQKqkWrwjRbt74hfUgG_x3TbQRob3v-eWNyrbpuE'
    // });
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers })
    // .pipe( map ( data => data['artists'].items));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => {return data['artists'].items;}));
  }
  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));

  }
}
