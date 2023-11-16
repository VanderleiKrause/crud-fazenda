import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalObservableService {
  URL = 'http://localhost:3000/animais';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Animal[]|undefined>{
    return this.httpClient.get<Animal[]>(this.URL);
  }

  post(animal: Animal): Observable<Animal|undefined> {
    return this.httpClient
      .post<Animal>(this.URL, JSON.stringify(animal), this.httpOptions);
  }

  put(animal: Animal): Observable<Animal|undefined> {
    return this.httpClient
      .put<Animal>(`${this.URL}/${animal.id}`, JSON.stringify(animal), this.httpOptions);
  }

  delete(animal: Animal): Observable<Animal|undefined> {
    return this.httpClient
      .delete<Animal>(`${this.URL}/${animal.id}`, this.httpOptions);
  }
}
