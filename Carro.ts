

const ler = require('readline-sync')
// exporta a classe Carro para Classe Garagem.

 export class Carro {
   public tanque:number
   public km:number
   public marca: string
   public idCarro:number

    constructor(tanque:number, km:number, marca: string,idCarro:number){
        this.tanque = tanque
        this.km = km
        this.marca = marca
        this.idCarro = idCarro
    }
//mostrar as informaçoes.
    getCarro():void{
        console.log(`Marca do carro: ${this.marca}, kilometragem: ${this.km} tanque de gasolina: ${this.tanque}.`);
        
    }
    // esse metodo mostra as perguntas.
    setCarro(): void{
        let tanqueUp = ler.questionInt('quanto de gasolina tem no carro?')
        let kmUp = ler.questionInt('quanto de km rodado por litros?')
        let marcaUp = ler.question('qual é a marca do carro?')
        let idCarroUp = ler.questionInt('qual o id do Carro?')


        this.tanque = tanqueUp
        this.km = kmUp
        this.marca = marcaUp
        this.idCarro = idCarroUp

    }
// Calcula a distancia e a kilometragem por litro do carro.
    Andar(distancia:number):void{
         let distanciaPercorrida = (this.tanque - (this.km/distancia))
         let perguntaVelocidade = ler.question.toLowerCase('vc deseja acelerar p carro? escreva (S) para sim ou (N) para nao') 
         let perguntaVelocidadeFinal = perguntaVelocidade.toLowerCase()

         if(perguntaVelocidadeFinal == 'S' && distanciaPercorrida != 0){
            console.log(`vc andou ${this.km} km.`);
         }else if(perguntaVelocidadeFinal == 'N') {
            console.log('vc nao andou');
            

         }else if(perguntaVelocidadeFinal == 'S' && distanciaPercorrida == 0){
            console.log('adicione gasolina.');
            
         } else{while (perguntaVelocidade != 'S' || 'N'){
            console.log('insira S ou N para continuar.');
            
        }
    }

    
      }
      // serve para imprimir.
      obterGasolina(): string{
        let obterGasolina = (`o seu carro possui ${this.tanque} de gasolina restante.`)
        return (obterGasolina)
      }
      //serve para add gasolina.
       AdicionarGasolina():string{
        let addGasolina = ler.question (`quantos litros de gasolina quer adicionar ao seu carro?`)
        let addGasolinaFinal = (`seu carro agora possui ${addGasolina} litros de gasolina`)
        return (addGasolinaFinal)
       }
    

}


