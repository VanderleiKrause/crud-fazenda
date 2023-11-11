import { Animal } from '../model/animal';
import { Constants } from './../util/constants';
import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { WebStorageUtil } from '../util/web-storage-util';
import { Shared } from '../util/shared';

@Injectable()
export class AnimalStorageService {
  animais!: Animal[];
  private animalSource!: BehaviorSubject<number>;
  constructor() {
    Shared.initializeWebStorage();
    this.animais = WebStorageUtil.get(Constants.ANIMAIS_KEY);
    this.animalSource = new BehaviorSubject<number>(this.animais.length);
  }

  save(animal: Animal) {
    this.animais = WebStorageUtil.get(Constants.ANIMAIS_KEY);
    this.animais.push(animal);
    WebStorageUtil.set(Constants.ANIMAIS_KEY, this.animais);
  }

  update(animal: Animal) {
    this.animais = WebStorageUtil.get(Constants.ANIMAIS_KEY);
    this.delete(animal.nome);
    this.save(animal);
  }

  delete(nome: string): boolean {
    this.animais = WebStorageUtil.get(Constants.ANIMAIS_KEY);
    this.animais = this.animais.filter((c) => {
      return c.nome?.valueOf() != nome?.valueOf();
    });

    WebStorageUtil.set(Constants.ANIMAIS_KEY, this.animais);
    return true;
  }

  isExist(value: string): boolean {
    this.animais = WebStorageUtil.get(Constants.ANIMAIS_KEY);
    for (let animal of this.animais) {
      if (animal.nome?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getAnimais(): Animal[] {
    this.animais = WebStorageUtil.get(Constants.ANIMAIS_KEY);
    return this.animais;
  }

  notifyTotalAnimais() {
    this.animalSource.next(this.getAnimais()?.length);
  }

  asObservable(): Observable<number> {
    return this.animalSource;
  }
}
