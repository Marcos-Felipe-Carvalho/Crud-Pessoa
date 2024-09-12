import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../services';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrl: './listar-pessoa.component.css'
})
export class ListarPessoaComponent implements OnInit {

  public pessoas: Array<Pessoa> = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Array<Pessoa> {
    return this.pessoaService.listarTodos();
  }

  remover($event: any, pessoa: Pessoa): void{
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)){
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.listarTodos();
    }
  }

}
