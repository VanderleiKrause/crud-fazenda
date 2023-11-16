import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testeRota',
  templateUrl: './testeRota.component.html',
  styleUrls: ['./testeRota.component.css']
})
export class TesteRotaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const animalIdFromRoute = Number(routeParams.get('id'));
  }

}
