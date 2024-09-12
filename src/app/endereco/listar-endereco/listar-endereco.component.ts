import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../service/endereco.service';
import { Endereco } from '../../shared/models/endereco.model';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrl: './listar-endereco.component.css'
})
export class ListarEnderecoComponent implements OnInit{
  
  enderecos : Array<Endereco> = [];

  constructor(private enderecoService:EnderecoService){}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Array<Endereco>{
    return this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco): void{
    $event.preventDefault();
    if(confirm(`Deseja realmente remover o endereço ${endereco.id}?`)){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }
}
