import { tap, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { District } from './district';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class DistrictService {
  private URL_BASE_SERVICE: string = environment.apiURL+'/district'

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

  getDistricts(): Observable<District[]> {
    return this.http.get<District[]>(this.URL_BASE_SERVICE).pipe(
      tap( (districts) => console.log('leu distritos:', districts) ),
      retry(1),
      catchError(this.handleError)
    )
  }

  getDistrict(districtName: string): Observable<District> {
    return this.http.get<District> (this.URL_BASE_SERVICE+'/'+districtName)
      .pipe(
        tap( (district) => console.log('get district:', district)),
        retry(1),
        catchError(this.handleError)
      )
  }

  getDistrictById(id: number): Observable<District> {
    return this.http.get<District> (this.URL_BASE_SERVICE+'/'+id)
      .pipe(
        tap( (district) => console.log('get district:', district)),
        retry(1),
        catchError(this.handleError)
      )
  }

  criarDistrict(district: District): Observable<District> {
    console.log(district)
    return this.http.post<District>(this.URL_BASE_SERVICE, JSON.stringify(district), httpOptions)
  }

  salvarDistrict(district: District): Observable<District>{
    if(district && district.id){
      return this.alterarDistrict(district.id, district);
    } else {
      return this.criarDistrict(district);
    }
  }

  alterarDistrict(id: number, district: District): Observable<District> {
    return this.http.patch<District>(this.URL_BASE_SERVICE+'/'+id, JSON.stringify(district),httpOptions)
    .pipe(
      tap( (district) => console.log('alterarDistrict',district)),
      retry(1),
      catchError(this.handleError)
    )
  }

  apagarDistrict(id: number): Observable<District> {
    return this.http.delete<District>(this.URL_BASE_SERVICE+'/'+id, httpOptions)
    .pipe(
      tap( (district) => console.log('apagarDistrict', district)),
      retry(1),
      catchError(this.handleError)
    )
  }
}
