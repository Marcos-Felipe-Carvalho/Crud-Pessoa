import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PessoaModule } from './pessoa';
import { EnderecoModule } from './endereco/endereco.module';
import { CidadeModule } from './cidade/cidade.module';
import { UfModule } from './uf/uf.module';
import { CaixaAltaPipe } from './shared/pipes/caixa-alta.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    EnderecoModule,
    CidadeModule,
    UfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
