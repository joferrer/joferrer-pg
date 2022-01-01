import {LinkedList} from './LinkendList.mjs';

function probarAddLkList(){
    console.log("Entra");
    let lista = new LinkedList();

    lista.addHead('Hola!, ');
    lista.addHead('Feliz ');
    lista.addHead('Anio ');
    console.log("Agrega: ");
    console.log(lista.toString());

    return lista.toString();
}
console.log(probarAddLkList());