import { Carro } from "./carro"

const leitor = require('readline-sync')
export class Garagem {
    Carros: Carro[]

    constructor(){
        this.Carros = []
    }

    adicionarCarro(Carros: Carro): void{
        this.Carros.push(Carros)

    }
    removerCarros(removeCarro: number): void{
        this.Carros = this.Carros.filter(Carro => Carro.idCarro !== removeCarro)


    }
    listarCarros(): void {
        console.log(this.Carros);
       
        
    }
}
