import { Animal } from '../model/animal';
import { Constants } from './../util/constants';
import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
//import { AnimalPromisseService } from '../services/animal-promisse.service';
import { AnimalObservableService} from './../services/animal-observable.service';

@Injectable()
export class AnimalStorageService {
  animais!: Animal[];
  private animalSource!: BehaviorSubject<number>;
  constructor(private animalObservableService: AnimalObservableService) {
    this.animalObservableService.getAll().subscribe((value) =>{this.animais =<Animal[]>value});

  }

  notifyTotalAnimais() {
    this.animalSource.next(this.animais.length);
  }

  save(animal: Animal) {
    this.animais.push(animal);
    this.animalObservableService.post(animal).subscribe((value) =>{});
  }

  update(animal: Animal) {
    this.animais = this.animais.filter((c) => {
      return c.id?.valueOf() != animal.id?.valueOf();
    });
    this.animais.push(animal);
    this.animalObservableService.put(animal).subscribe((value) =>{});
  }

  delete(animal: Animal): boolean {
    this.animais = this.animais.filter((c) => {return c.id?.valueOf() != animal.id?.valueOf();});
    this.animalObservableService.delete(animal).subscribe((value) =>{});
    return true;
  }

  isExist(value: number): boolean {
    for (let c of this.animais) {
      if (c.id?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  async getAnimais(): Promise<Animal[]> {
    this.animalObservableService.getAll().subscribe((value) =>{this.animais =<Animal[]>value});;
    return this.animais;
  }
}
