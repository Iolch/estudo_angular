//  IMPORTAMOS O COMPONENTE PARA O TS
import { Component } from '@angular/core';

//  ATRAVÉS DO DECORATOR, INFORMAMOS AO ANGULAR QUE ESSE ARQUIVO
//  CARACTERIZA UM COMPONENTE
@Component({
    selector: 'app-server',  // tag de referência ao componente '<app-server></app-server>'   
    templateUrl: './server.component.html'
})

//  CRIAMOS A CLASSE QUE CONTERÁ ESPECIFICIDADES DO COMPONENTE
export class ServerComponent
{}

//  LEMBRAR QUE O COMPONENTE SÓ FUNCIONARÁ QUANDO IMPORTADO EM APP.MODULE.TS!