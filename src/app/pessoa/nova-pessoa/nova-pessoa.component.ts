import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-pessoa',
  templateUrl: './nova-pessoa.component.html',
  styleUrl: './nova-pessoa.component.css'
})
export class NovaPessoaComponent {
  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa : Pessoa = new Pessoa();

  constructor(
    private pessoaService:PessoaService,
    private router:Router
  ){}
  
  inserir():void{
    if(this.formPessoa.form.valid){
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate(["/pessoas"])
    }
  }
}
