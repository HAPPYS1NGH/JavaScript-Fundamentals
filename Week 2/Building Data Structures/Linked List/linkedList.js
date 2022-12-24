class LinkedList {

    constructor()
    {
    this.head = null;
    }
    addFirst(node){
        if(this.head === null)
        this.head =node;
        else{
            node.next = this.head;
            this.head =node;
        }
    }
    addLast(node){
        if (this.head === null)
            this.head = node;
            else
            {
                let n = this.head;
                while(n.next!== null){
                    n= n.next;
                }
                n.next = node;
            }
    }
    indexOf(node){
        let n = this.head;
        let c=0;
        while(n !== node){
            n=n.next;
            c++;
        }
        return c;
    }
    removeAt(index){
        if(index === 0 ){
            this.head = this.head.next;
        }
        
        let n = this.head;
        let p =n;
        for(let i= 0 ;i< index ; i++){
            p=n;
            n = n.next;
        }
        p.next = n.next ;
    }
}
module.exports = LinkedList;