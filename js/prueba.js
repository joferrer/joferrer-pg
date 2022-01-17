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