import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Uf } from '../../shared/models/uf.model';
import { UfService } from '../service/uf.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-uf',
  templateUrl: './inserir-uf.component.html',
  styleUrl: './inserir-uf.component.css'
})
export class InserirUfComponent {

  @ViewChild('formUf') formUf! : NgForm;
  uf : Uf = new Uf();

  constructor(
    private ufService: UfService,
    private router: Router
  ){}

  inserir(): void{
    if(this.formUf.form.valid){
      this.ufService.inserir(this.uf);
      this.router.navigate(["/ufs/listar"])
    }
  }
}
