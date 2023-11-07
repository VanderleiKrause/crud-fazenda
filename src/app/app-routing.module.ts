import { TesteRotaComponent } from './testeRota/testeRota.component';
import { ListagemFazendaComponent } from './listagem-fazenda/listagem-fazenda.component';
import { CadastroFazendaComponent } from './cadastro-fazenda/cadastro-fazenda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'cadastro-fazenda', component: CadastroFazendaComponent },
                        { path: 'listagem-fazenda', component: ListagemFazendaComponent },
                        { path: 'testeRota', component: TesteRotaComponent },
                        { path: 'testeRota/:id', component: TesteRotaComponent },
                        { path: '', redirectTo: '/cadastro-fazenda', pathMatch: 'full' }];//set up routes contant

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
