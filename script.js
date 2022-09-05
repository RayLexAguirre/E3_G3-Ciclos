"use strict";

export default class Cycle{
    constructor(S, E){
        this.S = S;
        this.E = E;
    }

    ecuacionS(){
        let s = 4;
        let signo = 1;

        for(let i = 3; i <= this.S; i = i + 2){
            s = s - this.calculoEcuacionS(i) * signo;
            signo *= -1;
        }

        return (`S = ${s}`);
    }

    calculoEcuacionS(dividendo){
        let formula = 4 / dividendo;
        return formula;
    }

    ecuacionE(){
        let e = 1;

        for(let i = 1; i <= this.E; i++){
            e = e + this.calculoEcuacionE(i);
        }

        return (`E = ${e}`);
    }

    calculoEcuacionE(dividendo){
        let formula = 1/this.factorial(dividendo);
        return formula
    }

    factorial(dividendo){
        let resultado = dividendo;

        for (let i = 1; i < dividendo; i++){
            resultado = resultado * i;
        }

        return resultado;
    }
    
}



