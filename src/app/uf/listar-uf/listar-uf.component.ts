import { Component, OnInit } from '@angular/core';
import { Uf } from '../../shared/models/uf.model';
import { UfService } from '../service/uf.service';

@Component({
  selector: 'app-listar-uf',
  templateUrl: './listar-uf.component.html',
  styleUrl: './listar-uf.component.css'
})
export class ListarUfComponent implements OnInit{

  ufs : Array<Uf> = [];

  constructor(private ufService:UfService){}

  ngOnInit(): void {
    this.ufs = this.listarTodos();
  }

  listarTodos(): Array<Uf>{
    return this.ufService.listarTodos();
  }

  remover($event: any, uf: Uf): void{
    $event.preventDefault();
    if(confirm(`Deseja realmente remover o estado ${uf.id}?`)){
      this.ufService.remover(uf.id!);
      this.ufs = this.listarTodos();
    }
  }

}
