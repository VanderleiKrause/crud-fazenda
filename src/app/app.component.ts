import {  AfterViewInit, Component, OnInit  } from '@angular/core';
import { Animal } from './model/animal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.Component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  animal!: Animal;
  animais!: Array<Animal>;
  title = 'crud-fazenda';
  
  constructor(){

  }

  ngOnInit(): void {
    this.animal = new Animal("","","","","");
  }

  ngAfterViewInit(): void {

  }

  onSubmit(){
    alert("Nome do animal: " + this.animal.nome);
    if(this.animal.nome!="" && this.animal.tipo != ""){
      this.animais.push(this.animal);
      this.animal = new Animal("", "", "", "", "");
    }
  }
}
