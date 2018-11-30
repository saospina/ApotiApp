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
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;

    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });







    // console.log('Doing a http request');
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (response: any) => {
    //   this.paises = response;
    //   console.log(response);

    // });
  }

  ngOnInit() {
  }

}
