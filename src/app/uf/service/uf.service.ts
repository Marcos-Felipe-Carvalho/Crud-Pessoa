import { Injectable } from '@angular/core';
import { Uf } from '../../shared/models/uf.model';

const LS_CHAVE = "ufs";

@Injectable({
  providedIn: 'root'
})
export class UfService {

  constructor() { }

  listarTodos(): Array<Uf>{
    const ufs = localStorage[LS_CHAVE];
    return ufs ? JSON.parse(ufs) : [];
  }

  inserir(uf:Uf): void{
    const ufs = this.listarTodos();
    uf.id = new Date().getTime();
    ufs.push(uf);
    localStorage[LS_CHAVE] = JSON.stringify(ufs);
  }

  buscarPorId(id:number): Uf | undefined {
    const ufs = this.listarTodos();
    return ufs.find(uf => uf.id===id);
  }

  atualizar(uf:Uf):void{
    const ufs = this.listarTodos();
    ufs.forEach((obj, index, objs)=>{
      if(uf.id === obj.id){
        objs[index] = uf
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(ufs)
  }

  remover(id: number) : void{
    let ufs = this.listarTodos();
    ufs = ufs.filter(uf => uf.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(ufs);
  }
}
