export class Animal{
    private _nome: string;
    private _tipo: string;
    private _raca: string;
    private _dataNascimento: string;
    private _observacao: string;
  
    constructor (nome: string, tipo: string, raca: string, dataNascimento: string, observacao: string){
        this._nome = nome;
        this._tipo = tipo;
        this._raca = raca;
        this._dataNascimento = dataNascimento;
        this._observacao = observacao;
      }
  
  
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
    get tipo(){
        return this._tipo;
    }
    set tipo(tipo){
        this._tipo = tipo;
    }
    get raca(){
        return this._raca;
    }
    set raca(raca){
        this._raca = raca;
    }
    get dataNascimento(){
        return this._dataNascimento;
    }
    set dataNascimento(dataNascimento){
        this._dataNascimento = dataNascimento;
    }
    get observacao(){
        return this._observacao;
    }
    set observacao(observacao){
        this._observacao = observacao;
    }
  }