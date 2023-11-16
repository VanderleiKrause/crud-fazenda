import { AnimalPromisseService } from './../services/animal-promisse.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Animal } from '../model/animal';
import { NgForm } from '@angular/forms';
import { AnimalStorageService } from './cadastro-fazenda-storage.service';

@Component({
  selector: 'cadastro-fazenda',
  templateUrl: './cadastro-fazenda.component.html',
  styleUrls: ['./cadastro-fazenda.Component.css'],
  providers: [AnimalStorageService, AnimalPromisseService],
})
export class CadastroFazendaComponent implements OnInit,AfterViewInit{
  @ViewChild('form') form!: NgForm;

  animal!: Animal;
  animais!: Promise<Animal[]>;
  title = 'crud-fazenda';
  
  constructor(private animalStorageService: AnimalStorageService){

  }
  getAnimais(){
    return this.animalStorageService.animais;
  }
  ngOnInit(): void {
    this.animal = new Animal(Math.random(),"","","","","");
    this.animais = this.animalStorageService.getAnimais();
  }
  onSubmit(){
    let a = Animal.clone(this.animal);
    if (!this.animalStorageService.isExist(this.animal.id)) {
      this.animalStorageService.save(a);
    } else {
      this.animalStorageService.update(a);
    }

    this.form.reset();
    this.animal = new Animal(Math.random(),"","","","","");
  }
  onEdit(animal: Animal) {
    let a = Animal.clone(animal);
    this.animal = a;
  }
  onDelete(animal: Animal) {
    let confirmation = window.confirm('Deseja realmente remover o ' + animal.nome + '?');
    if (!confirmation) {
      return;
    }
    let response: boolean = this.animalStorageService.delete(animal);

  }
  ngAfterViewInit(): void {

  }
  onNotify() {
    window.alert('Tem um total de ' + this.animalStorageService.notifyTotalAnimais + ' animais.');
  }
}
