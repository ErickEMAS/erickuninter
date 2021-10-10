import { Component } from '@angular/core';
import { Aluno } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //estancia 5 objetos do tipo Aluno
  erick: Aluno = new Aluno("Erick", 3327304, "Análise e Desenvolvimento de Sistemas", "11/05/1997");
  alexandre: Aluno = new Aluno("Alexandre", 9360476, "Tecnologia em Logística", "05/11/1998");
  ethan: Aluno = new Aluno("Ethan", 6208534, "Tecnologia em Mecatrônica Automotiva", "14/08/2002");
  noah: Aluno = new Aluno("Noah", 8307123, "Tecnologia em Processos Químicos", "30/05/1999");
  gustavo: Aluno = new Aluno("Gustavo", 8302188, "Tecnologia em Redes de Computadores", "04/02/200");

  //Adiciona os 5 objetos a lista de alunos
  alunos: Aluno[] = [this.erick, this.alexandre, this.ethan, this.noah, this.gustavo];
  
}
