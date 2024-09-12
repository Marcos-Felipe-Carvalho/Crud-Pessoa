import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { NovaPessoaComponent } from './pessoa/nova-pessoa/nova-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './cidade/inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './cidade/editar-cidade/editar-cidade.component';
import { ListarUfComponent } from './uf/listar-uf/listar-uf.component';
import { InserirUfComponent } from './uf/inserir-uf/inserir-uf.component';
import { EditarUfComponent } from './uf/editar-uf/editar-uf.component';

const routes: Routes = [
  {path:'', redirectTo:'pessoas/listar', pathMatch:'full'},
  {path:'pessoas', redirectTo:'pessoas/listar'},
  {path:'pessoas/listar',component:ListarPessoaComponent},
  {path:'pessoas/novo', component: InserirPessoaComponent},
  {path:'pessoas/inserir', component: NovaPessoaComponent},
  {path:'pessoas/editar/:id', component: EditarPessoaComponent},
  {path:'enderecos/listar', component: ListarEnderecoComponent},
  {path:'enderecos/novo', component: InserirEnderecoComponent},
  {path:'enderecos/editar/:id', component: EditarEnderecoComponent},
  {path:'cidades/listar',component:ListarCidadeComponent},
  {path:'cidades/inserir',component:InserirCidadeComponent},
  {path:'cidades/editar/:id',component:EditarCidadeComponent},
  {path:'ufs/listar',component:ListarUfComponent},
  {path:'ufs/inserir',component:InserirUfComponent},
  {path:'ufs/editar/:id',component:EditarUfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
