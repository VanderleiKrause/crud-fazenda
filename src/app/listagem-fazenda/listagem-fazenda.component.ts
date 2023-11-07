import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../model/animal';

@Component({
  selector: 'app-listagem-fazenda',
  templateUrl: './listagem-fazenda.component.html',
  styleUrls: ['./listagem-fazenda.component.css']
})
export class ListagemFazendaComponent implements OnInit{

  @Input() animais!: Array<Animal>;
  @Output() notify = new EventEmitter();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));

  }
}
