import { Animal } from '../model/animal';
import { Constants } from './../util/constants';
import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { AnimalPromisseService } from '../services/animal-promisse.service';

@Injectable()
export class AnimalStorageService {
  animais!: Animal[];
  private animalSource!: BehaviorSubject<number>;
  constructor(private animalPromisseService: AnimalPromisseService) {
    this.animalPromisseService.get().then((value) =>{this.animais =<Animal[]>value})
                          .catch((e) => {this.animais = [] });
  }

  save(animal: Animal) {
    this.animais.push(animal);
    this.animalPromisseService.post(animal).then((value) =>{})
    .catch((e) => {});
  }

  update(animal: Animal) {
    this.animais = this.animais.filter((c) => {
      return c.id?.valueOf() != animal.id?.valueOf();
    });
    this.animais.push(animal);
    this.animalPromisseService.put(animal).then((value) =>{})
    .catch((e) => {});
  }

  delete(animal: Animal): boolean {
    this.animais = this.animais.filter((c) => {return c.id?.valueOf() != animal.id?.valueOf();});
    this.animalPromisseService.delete(animal).then((value) =>{})
                                     .catch((e) => {});
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
    this.animais =  <Animal[]> await this.animalPromisseService.get();
    return this.animais;
  }

  notifyTotalAnimais() {
    this.animalSource.next(this.animais.length);
  }

}
