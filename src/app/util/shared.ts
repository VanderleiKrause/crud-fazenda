import { Animal } from './../model/animal';
import { Constants } from './constants';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.ANIMAIS_KEY) != null) {
      return;
    }

    let animal = new Animal("Testinha","Cachorro","Boxer","2023-12-11","Cachorro malhado");
    let animais = [animal];

    localStorage.setItem(Constants.ANIMAIS_KEY, JSON.stringify(animais));
  }
}
