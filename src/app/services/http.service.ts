import { from } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { RequestMovie } from '../models/requestMovie';

@Injectable()
export class HttpService
{
    constructor(private httpClient: HttpClient) { }

    postMovieInfo(requestMovie: RequestMovie) {

        const requestBody = {
            t: requestMovie.t, 
            y: requestMovie.y, 
            type: requestMovie.type,
            apikey: requestMovie.apikey
        };

        let headers = new HttpHeaders(); 
        headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        const url: string = `http://www.omdbapi.com/?t=${requestBody.t}&y=${requestBody.y}&type=${requestBody.type}&apikey=${requestBody.apikey}` ;

        // любые политики CORS не сработали, перепробовал вариантов с полсотни - в итоге передаю все в строке, а в body - null.
        return this.httpClient.post(url, null, {headers : headers});
    }
}