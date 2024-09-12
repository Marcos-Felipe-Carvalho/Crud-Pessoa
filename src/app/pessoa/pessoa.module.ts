import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PessoaService } from './services';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { NovaPessoaComponent } from './nova-pessoa/nova-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { NumericoDirective } from '../shared/directives/numerico.directive';

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    NovaPessoaComponent,
    EditarPessoaComponent,
    NumericoDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    PessoaService
  ]
})
export class PessoaModule { }
