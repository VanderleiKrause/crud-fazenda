import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal';

@Component({
  selector: 'cadastro-fazenda',
  templateUrl: './cadastro-fazenda.component.html',
  styleUrls: ['./cadastro-fazenda.Component.css']
})
export class CadastroFazendaComponent implements OnInit,AfterViewInit{
  animal!: Animal;
  animais!: Array<Animal>;
  title = 'crud-fazenda';
  
  constructor(){

  }

  ngOnInit(): void {
    this.animais = [new Animal("Teste1","Bovino","Nelori","2020-01-01","Não é puro"),
                    new Animal("Teste2","Bovino","Nelori","2021-02-21","É puro"),
                    new Animal("Teste3","Bovino","Angus","2023-02-21","É puro")]
    this.animal = new Animal("","","","","");
  }
  onSubmit(){

  }
  onSaveClick(){
    if(this.animal.nome == ""){
      alert("Informe o Nome do animal.");
    } else if (this.animal.tipo == ""){
      alert("Informe qual o Tipo do animal.");
    } else {
      this.animais.push(this.animal);
      this.animal = new Animal("","","","","");
    }
  }
  ngAfterViewInit(): void {

  }
  onNotify() {
    window.alert('Tem um total de ' + this.animais.length + ' animais.');
  }
}
