import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUfComponent } from './listar-uf/listar-uf.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirUfComponent } from './inserir-uf/inserir-uf.component';
import { EditarUfComponent } from './editar-uf/editar-uf.component';



@NgModule({
  declarations: [
    ListarUfComponent,
    InserirUfComponent,
    EditarUfComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class UfModule { }
