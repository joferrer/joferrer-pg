import {LinkedList} from './LinkendList.mjs';

let lista = new LinkedList();
function probarAddLkList(){
    console.log("Entra");
   
    
    lista.addEnd('Hola!, ');
    lista.addEnd('Feliz ');
    lista.addEnd('Anio ');
    lista.addHead('Jeison ');
    lista.addHead('Omar ');
    lista.addEnd('Que cosas ')
    console.log("Agrega: ");


    return lista.toString();
}
console.log(probarAddLkList());
console.log(lista.size());

lista.delete(0);
console.log("1. "+lista.toString());
lista.delete(4);
console.log("2. "+lista.toString());
lista.delete(2);
console.log("3. "+lista.toString());
lista.delete(10);
console.log("4. "+lista.toString());
console.log(lista.toString());
