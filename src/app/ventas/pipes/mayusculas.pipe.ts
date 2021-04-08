import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    // Para usar este pipe, se declara en el modulo que se va a ocupar
    transform( valor: string, enMayus: boolean = true): string {
        /*
        if( enMayus ){
            return valor.toUpperCase();
        } else {
            return valor.toLowerCase();
        }
        */
        // En ternario, de manera mucho más resumida
        return( enMayus ) 
            ? valor.toUpperCase() 
            : valor.toLowerCase();
        
    }
}