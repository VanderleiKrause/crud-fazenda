export class Animal{
    public id: number;
    public nome: string;
    public tipo: string;
    public raca: string;
    public dataNascimento: string;
    public observacao: string;
  
    constructor (id: number,nome: string, tipo: string, raca: string, dataNascimento: string, observacao: string){
        this.id =id;  
        this.nome = nome;
        this.tipo = tipo;
        this.raca = raca;
        this.dataNascimento = dataNascimento;
        this.observacao = observacao;
      }
  
    public static clone(animal: Animal) {
        let a: Animal = new Animal(animal.id, animal.nome, animal.tipo, animal.raca, animal.dataNascimento, animal.observacao);
        return a;
      }
  }