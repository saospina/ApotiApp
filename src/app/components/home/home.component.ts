import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // paises: any[] = [];

  constructor( private spotify: SpotifyService) {






    
    // console.log('Doing a http request');
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (response: any) => {
    //   this.paises = response;
    //   console.log(response);
      
    // });
   }

  ngOnInit() {
  }

}
