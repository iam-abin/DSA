class MinHeap{
    constructor(){
        this.heap=[]
    }

    getMin(){
        return this.heap[0];
    }

    display(){
        console.log(this.heap);
    }

    insert(data){
        this.heap.push(data);
        let childIndex=this.heap.length-1;
        while(childIndex>0){
            let parentIndex=Math.floor((childIndex-1)/2);
            if(this.heap[childIndex]<this.heap[parentIndex]){
                [this.heap[childIndex],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[childIndex]];
                childIndex=parentIndex;
            }else{
                break;
            }
        }
    }

    removeMin(){
        if(this.heap.length==0){
            return null;
        }else if(this.heap.length==1){
            return this.heap.pop();
        }else{
            let min=this.heap[0];
            this.heap[0]=this.heap.pop();
            let parentIdx=0;
            while(true){
                let leftChileIdx=2*parentIdx+1;
                let rightChildIdx=2*parentIdx+2;
                let smallestChildIdx=null;
                if(leftChileIdx<this.heap.length){
                    smallestChildIdx=leftChileIdx;
                }
                if(rightChildIdx<this.heap.length&&this.heap[rightChildIdx]<this.heap[leftChileIdx]){
                    smallestChildIdx=rightChildIdx;
                }
                if(smallestChildIdx==null){
                    break;
                }
                if(this.heap[parentIdx]>this.heap[smallestChildIdx]){
                    [this.heap[parentIdx],this.heap[smallestChildIdx]]=[this.heap[smallestChildIdx],this.heap[parentIdx]]
                    parentIdx=smallestChildIdx;
                }else{
                    break;
                }
            }

            return min
        }
    }

    findDuplicates(){
        let set1=new Set();
        for(let i=0;i<this.heap.length;i++){
            for(let j=0;j<this.heap.length;j++){
                if(this.heap[i]==this.heap[j]&&i!=j){
                    set1.add(this.heap[i])
                }
            }
        }
        return set1
    }


}

let min=new MinHeap();
min.insert(20)
min.insert(10)
min.insert(40)
min.insert(30)
min.display()