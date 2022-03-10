'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
 //******************************************* */

let grafo;

grafo = [['i',0,1,2,3],[0],[1],[2],[3]];

function recorrer(){
    let i = 0;
    let j = 0;
    
    while(i<grafo.length){
         j = 0;
         console.log(grafo[i]);
        while(j<grafo[i].length){;
            j++;
        }
        i++;
    }
}


/**
 * Fibo
 */
const fib = (n, memo={})=>{
    if(n in memo) return memo[n];
    if(n <=2)return 1;
    memo[n]= fib(n-1,memo) + fib(n-2,memo);
    return memo[n];
}
console.log(fib(50));


/**
 * Constest A, Natives
 */
const nav = (n,m)=>{
    n = readLine();
    m = readLine().split(',').map;
}
