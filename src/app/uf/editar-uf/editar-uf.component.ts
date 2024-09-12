import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Uf } from '../../shared/models/uf.model';
import { UfService } from '../service/uf.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-uf',
  templateUrl: './editar-uf.component.html',
  styleUrl: './editar-uf.component.css'
})
export class EditarUfComponent implements OnInit{

  @ViewChild('formUf') formUf! : NgForm;
  uf : Uf = new Uf();

  ngOnInit(): void {
      let id = +this.route.snapshot.params["id"];
      const res = this.ufService.buscarPorId(id);
      if(res !== undefined){
        this.uf = res;
      }else{
        throw new Error("uf não encontrada: id = " + id)
      }
  }

  constructor(
    private ufService: UfService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  atualizar(): void{
    if(this.formUf.form.valid){
      this.ufService.atualizar(this.uf);
      this.router.navigate(['/ufs/listar'])
    }
  }
}
