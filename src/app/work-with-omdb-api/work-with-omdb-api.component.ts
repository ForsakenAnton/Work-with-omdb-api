import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { RequestMovie } from '../models/requestMovie';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-work-with-omdb-api',
  templateUrl: './work-with-omdb-api.component.html',
  styleUrls: ['./work-with-omdb-api.component.css'],
  providers: [HttpService]
})
export class WorkWithOmdbApiComponent implements OnInit {

  requestMovie: RequestMovie = new RequestMovie();

  receivedMovie;//: Movie;
  isDone: boolean = false;

  constructor(private httpService: HttpService) {
    //this.movie = new Movie();
   }

  ngOnInit(): void {
  }

  submitMovie(requestMovie: RequestMovie) {
    this.httpService.postMovieInfo(requestMovie)
    .subscribe(
      (data) => {
        this.receivedMovie = data; this.isDone = true;
        /////////////////////
        console.log(data); //
        console.log(this.receivedMovie.Title); //
        /////////////////////////////////////////
      },
      error => console.log(error)
    );  
  }
}
