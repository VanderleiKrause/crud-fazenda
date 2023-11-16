import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalPromisseService {
  URL = 'http://localhost:3000/animais';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) { }

  get(): Promise<Animal[]|undefined>{
    return this.httpClient.get<Animal[]>(this.URL).toPromise();
  }
  
  post(animal: Animal): Promise<Animal|undefined> {
    return this.httpClient
      .post<Animal>(this.URL, JSON.stringify(animal), this.httpOptions)
      .toPromise();
  }
  put(animal: Animal): Promise<Animal|undefined> {
    return this.httpClient
      .put<Animal>(`${this.URL}/${animal.id}`, JSON.stringify(animal), this.httpOptions)
      .toPromise();
  }
  delete(animal: Animal): Promise<Animal|undefined> {
    return this.httpClient
      .delete<Animal>(`${this.URL}/${animal.id}`, this.httpOptions)
      .toPromise();
  }

}
