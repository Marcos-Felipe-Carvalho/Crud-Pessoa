import { Component, OnInit, ViewChild } from '@angular/core';
import { Cidade } from '../../shared/models/cidade.model';
import { NgForm } from '@angular/forms';
import { CidadeService } from '../services/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrl: './editar-cidade.component.css'
})
export class EditarCidadeComponent implements OnInit{
  
  @ViewChild('formCidade') formCidade! : NgForm;
  cidade : Cidade = new Cidade();

  ngOnInit(): void {
      let id = +this.route.snapshot.params["id"];
      const res = this.cidadeService.buscarPorId(id);
      if(res !== undefined){
        this.cidade = res;
      }else{
        throw new Error("cidade não encontrada: id = " + id)
      }
  }

  constructor(
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  atualizar(): void{
    if(this.formCidade.form.valid){
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades/listar'])
    }
  }

}
