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
        let newHead = new Node();
        newHead.content = newH;
        newHead.next = this.head;
        this.head = newHead;
        this.listSize++;
    }
    addEnd(newN){
        let newNode = new Node();
        newNode.content = newN;
        if(this.head == null)
            this.head = newNode;

        else{
            let f = false; //f -> final node.
            let n = this.head;
            //While is not the final node.
            while(!f){
                if(n.next == null){
                    n.next = newNode;
                    f = true;
                }
                else
                    n = n.next;
                
            }
        }
        this.listSize++;
    }
    /**
     * Get node in positon i
     * @param {number} i 
     * @returns 
     */
    getI(i){
        
        let n = this.head;
        if(i >= this.listSize )
            return null;

        while(i--){
            n = n.next;
        }
        return n;
    }
    /**
     * Get the first node with the content n
     * @param {*} n 
     * @returns 
     */
    getE(n){
        let nI = this.head; 
        while(!nI.equals(n)){
            if(nI.next == null)
                return null;
            nI = nI.next;
        }

        return nI;
    }
    /**
     * Generic function get. This funtion call getI() o getE() depent paragram's type.
     * @param {} i 
     * @returns 
     */
    get(i){
        //Search by index
        
        if (!isNaN(i)){
            return this.getI(i);
        }
        //Search by content
        else{
            
            return this.getE(i);
        }
    }
    clear(){
        this.head = null;
    }
    /**
     * Delete by index
     * @returns true -> the element was deleted. 
     *          false -> the index is out of the lk limits.
     */
    delete(n){
        
        if(n<0 || n>this.size()) //Is not in the lk
            return false;

        if(n == this.size()-1) // Is de last node
            this.get(n-1).next = null;

        else if (n == 0) //Is the head
            this.head = this.head.next;

        else{
            let nodeB = this.get(n-1); //BEFORE
            let nodeD = nodeB.next;
            nodeB.next = nodeD.next;
            nodeD.next = null;

        }
        this.listSize--;
        return true;
    }

    toString(){
        if(this.head == null)
            return "Void";
        else{
          
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