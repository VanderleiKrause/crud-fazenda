import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteRotaComponent } from './testeRota.component';

describe('TesteRotaComponent', () => {
  let component: TesteRotaComponent;
  let fixture: ComponentFixture<TesteRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteRotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
