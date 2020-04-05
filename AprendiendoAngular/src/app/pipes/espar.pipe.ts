import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'esPar'
})
export class EsPar implements PipeTransform {

    transform(value: any, ...args: any[]) {
        let msg: string;
        if (value % 2 == 0) {
            msg = 'es par';
        } else {
            msg = 'es impar';
        }
        return `El año es ${value} y ${msg}`;
    }

}