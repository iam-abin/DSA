// bubbleUp is also called heapifyUp
// bubbleDown is also called heapifyDown

class MaxHeap{
    constructor(){
        this.heap=[]
    }

    insert(data){
        this.heap.push(data);
        this._bubbleUp(this.heap.length-1);
    }

    _bubbleUp(childIndex){
        if(childIndex==0){
            return;
        }

        let parentIndex=Math.floor((childIndex-1)/2);
        if(this.heap[parentIndex]<this.heap[childIndex]){
            [this.heap[parentIndex],this.heap[childIndex]]=[this.heap[childIndex],this.heap[parentIndex]];
            this._bubbleUp(parentIndex)
        }
    }

    remove(){
        if(this.heap.length==0){
            return null;
        }else if(this.heap.length==1){
            return this.heap.pop();
        }else{
            let max=this.heap[0];
            this.heap[0]=this.heap.pop();
            this._bubbleDown(0,this.heap.length);

            return max
        }
    }

    _bubbleDown(parentIndex,n){

        let leftChildIndex=2*parentIndex+1
        let rightChildIndex=2*parentIndex+2
        let max=parentIndex;

        if(leftChildIndex<n && this.heap[leftChildIndex]>this.heap[max]){
            max=leftChildIndex;
        }

        if(rightChildIndex<n && this.heap[rightChildIndex]>this.heap[max]){
            max=rightChildIndex
        }
        
        if(max!=parentIndex){
           [this.heap[max],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[max]];
           this._bubbleDown(max,n)
        }
    }

    display(){
        console.log(this.heap);
    }

    heapSort(){
        for(let i=this.heap.length-1;i>=0;i--){
            [this.heap[0],this.heap[i]]=[this.heap[i],this.heap[0]];
            this._bubbleDown(0,i)
        }
    }
}

const mh=new MaxHeap();
mh.insert(20)
mh.insert(10)
mh.insert(40)
mh.insert(30)
mh.insert(60)
// mh.remove()
mh.display()

mh.heapSort()
mh.display()
