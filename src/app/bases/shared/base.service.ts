import { tap, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Base } from './base';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private URL_BASE_SERVICE: string = environment.apiURL+'/base'

  constructor(private http: HttpClient) {}

  handleError(error: any) {
    console.log('erro no handleError',error);
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Se for um erro client-side
      errorMessage = error.error.message;
    } else {
      // se for um erro do servidor(server-side)
      errorMessage = `Código do Erro Http: ${error.status}\nMensagem: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getBases(): Observable<Base[]> {
    return this.http.get<Base[]>(this.URL_BASE_SERVICE).pipe(
      tap( (bases) => console.log('leu distritos:', bases) ),
      retry(1),
      catchError(this.handleError)
    )
  }
}
