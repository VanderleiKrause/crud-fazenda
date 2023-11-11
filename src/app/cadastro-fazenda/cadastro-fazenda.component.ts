import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Animal } from '../model/animal';
import { Shared } from '../util/shared';
import { NgForm } from '@angular/forms';
import { AnimalStorageService } from './cadastro-fazenda-storage.service';

@Component({
  selector: 'cadastro-fazenda',
  templateUrl: './cadastro-fazenda.component.html',
  styleUrls: ['./cadastro-fazenda.Component.css'],
  providers: [AnimalStorageService],
})
export class CadastroFazendaComponent implements OnInit,AfterViewInit{
  @ViewChild('form') form!: NgForm;

  animal!: Animal;
  animais!: Animal[];
  title = 'crud-fazenda';
  
  constructor(private animalService: AnimalStorageService){

  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.animal = new Animal("","","","","");
    this.animais = this.animalService.getAnimais();
  }
  onSubmit(){
    if (!this.animalService.isExist(this.animal.nome)) {
      this.animalService.save(this.animal);
    } else {
      this.animalService.update(this.animal);
    }

    this.form.reset();
    this.animal = new Animal("","","","","");

    this.animais = this.animalService.getAnimais();

    this.animalService.notifyTotalAnimais();

  }

  onEdit(animal: Animal) {
    let clone = Animal.clone(animal);
    this.animal = clone;
  }

  onDelete(nome: string) {
    let confirmation = window.confirm('Deseja realmente remover o ' + nome + '?');
    if (!confirmation) {
      return;
    }
    let response: boolean = this.animalService.delete(nome);

    this.animais = this.animalService.getAnimais();
    this.animalService.notifyTotalAnimais();
  }

  ngAfterViewInit(): void {

  }
  onNotify() {
    window.alert('Tem um total de ' + this.animais.length + ' animais.');
  }
}
