export class Animal{
    public nome: string;
    public tipo: string;
    public raca: string;
    public dataNascimento: string;
    public observacao: string;
  
    constructor (nome: string, tipo: string, raca: string, dataNascimento: string, observacao: string){
        this.nome = nome;
        this.tipo = tipo;
        this.raca = raca;
        this.dataNascimento = dataNascimento;
        this.observacao = observacao;
      }
  
    public static clone(animal: Animal) {
        let a: Animal = new Animal(animal.nome, animal.tipo, animal.raca, animal.dataNascimento, animal.observacao);
        return a;
      }
  }