import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of,Observable, catchError } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private httpClient : HttpClient ) { }

  private apiUrl: string = 'https://restcountries.com/v3.1';

  buscarPais( termino: string ) : Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.httpClient.get<Country[]>( url );
  }

  buscarCapital( termino: string ) : Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.httpClient.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string ) : Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.httpClient.get<Country>( url );
  }
}
