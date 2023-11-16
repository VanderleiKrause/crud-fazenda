import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFazendaComponent } from './listagem-fazenda.component';

describe('ListagemFazendaComponent', () => {
  let component: ListagemFazendaComponent;
  let fixture: ComponentFixture<ListagemFazendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemFazendaComponent]
    });
    fixture = TestBed.createComponent(ListagemFazendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
