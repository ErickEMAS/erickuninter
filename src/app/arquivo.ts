export class Aluno { //Clase aluno
    nome: string | undefined;
    ru: number | undefined;
    nomeDoCurso: string | undefined;
    dataDeAniversario: string | undefined;

    constructor(nome: string, ru: number, nomeDoCurso: string, dataDeAniversario: string){
        this.nome = nome;
        this.ru = ru;
        this.nomeDoCurso = nomeDoCurso;
        this.dataDeAniversario = dataDeAniversario;
      }
}

