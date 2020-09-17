export class Usuario{
    id: number;
    usuario: String;
    senha: number;

    constructor(nome: String, senha: number){
        this.usuario= nome;
        this.senha= senha;
    }
}