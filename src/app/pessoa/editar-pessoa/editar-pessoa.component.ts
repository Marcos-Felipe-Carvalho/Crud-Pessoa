import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrl: './editar-pessoa.component.css'
})
export class EditarPessoaComponent implements OnInit{
  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa : Pessoa = new Pessoa();

  ngOnInit(): void {
      let id = +this.route.snapshot.params["id"];
      const res = this.pessoaService.buscarPorId(id);
      if(res !== undefined){
        this.pessoa = res;
      }else{
        throw new Error("pessoa não encontrada: id = " + id)
      }
  }

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  atualizar(): void{
    if(this.formPessoa.form.valid){
      this.pessoaService.atualizar(this.pessoa);
      this.router.navigate(['/pessoas'])
    }
  }


}
