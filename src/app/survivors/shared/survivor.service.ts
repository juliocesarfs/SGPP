import { Survivor } from './survivor';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, tap, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})


export class SurvivorService {
  private URL_SURVIVOR_SERVICE: string = environment.apiURL+'/survivor';

  constructor(private http: HttpClient) {}

// Error handling
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

  getSurvivors(): Observable<Survivor[]> {

    return this.http.get<Survivor[]>(this.URL_SURVIVOR_SERVICE).pipe(
      tap( (survivors) => console.log('leu Survivors:',survivors)),
      retry(1),
      catchError(this.handleError )
    );
  }

  // Obter um Survivor -> HttpClient Get()
  getSurvivor(id: number): Observable<Survivor> {
    return this.http.get<Survivor> (this.URL_SURVIVOR_SERVICE+'/'+id)
      .pipe(
        tap( (survivor) => console.log('get Survivor:', survivor)),
        retry(1),
        catchError(this.handleError)
      )
  }

  // Criar um novo Survivor -> HttpClient API Post()
  criarSurvivor(survivor: Survivor): Observable<Survivor> {
    console.log(survivor)
    return this.http.post<Survivor>(this.URL_SURVIVOR_SERVICE, JSON.stringify(survivor), httpOptions)
    // .pipe(
    //   tap( (survivor) => console.log('criarSurvivor',survivor)),
    //   retry(1),
    //   catchError(this.handleError)
    // )
  }

   // Alterar um novo Survivor -> HttpClient API Post()
   alterarSurvivor(id:number, survivor: Survivor): Observable<Survivor> {
    return this.http.patch<Survivor>(this.URL_SURVIVOR_SERVICE+'/'+id, JSON.stringify(survivor),httpOptions)
    .pipe(
      tap( (survivor) => console.log('alterarSurvivor',survivor)),
      retry(1),
      catchError(this.handleError)
    )
  }

  salvarSurvivor(survivor: Survivor): Observable<Survivor>{
    if(survivor && survivor.id){
      return this.alterarSurvivor(survivor.id, survivor);
    }else{
      return this.criarSurvivor(survivor);
    }
  }

   // Alterar um novo Survivor -> HttpClient API Post()
   apagarSurvivor(id:number): Observable<Survivor> {
    return this.http.delete<Survivor>(this.URL_SURVIVOR_SERVICE+'/'+id,httpOptions)
    .pipe(
      tap( (survivor) => console.log('apagarSurvivor',survivor)),
      retry(1),
      catchError(this.handleError)
    )
  }

}
