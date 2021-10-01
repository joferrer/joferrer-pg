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