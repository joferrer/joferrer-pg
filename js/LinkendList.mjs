class Node{

    constructor(content,next=null){
        this.content = content;
        this.next = next;
    }
    equals(n){
        return this.content === n.content;
    }
     
    
}

class LinkedList{
   
    constructor(){
        this.head = null;
        this.listSize =0;
        
    }

    size(){
        return this.listSize;
    }
    getHead(){
        return this.head;
    }
    addHead(newH){
        console.log("Agregando:");
        let newHead = new Node();
        newHead.content = newH;
        newHead.next = this.head;
        this.head = newHead;
    }
    addEnd(newN){
        let newNode = new Node();
        newNode.content = newN;
        if(this.head == null)
            this.head = newHead;

        else{
            let f = false;
            let n = this.head;
            while(!f){
                if(n.next == null){
                    n.next = newNode;
                    f = true;
                }
                else
                    n = n.next;
                
            }
        }
    }
    getI(i){
        let n = this.head;
        if(i >= this.listSize )
            return null;

        while(i--){
            n = n.next;
        }
        return n;
    }
    getE(n){
        let nI = this.head; //NodoIteracion
        while(!nI.equals(n)){
            if(nI.next == null)
                return null;
            nI = nI.next;
        }

        return nI;
    }
    get(i){
        //Buscar por indice
        if (isNaN(i)){
            return this.getI(i);
        }
        //Buscar por Elemento
        else{
            return this.getE(i);
        }
    }
    clear(){
        this.head = null;
    }

    toString(){
        if(this.head == null)
            return "Void";
        else{
            console.log('Recorre: ');
            let n = this.head;
            let s = "Head -> ";
            while(n != null){
                s+= String(n.content) + "-> ";
                n = n.next;
            }
            s+= 'null';
            return s;
        }
    }
}


export{LinkedList}