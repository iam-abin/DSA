class Node{
    constructor(){
        this.map=new Map();
        this.endOfWord=false;
    }
}

class Suffix{
    constructor(){
        this.root=new Node();
    }

    insert(word){
        for(let i=0;i<word.length;i++){
            this._insertSubString(i,word);
        }
    }

    _insertSubString(index,word){
        let current=this.root;
        for(let i=index;i<word.length;i++){
            let letter=word[i];
            if(!current.map.has(letter)){
                current.map.set(letter,new Node());
            }
            current=current.map.get(letter);
        }
        current.endOfWord=true;
    }

    search(word){
        let current=this.root;
        for(const letter of word){
            if(!current.map.has(letter)){
                return false;
            }
            current=current.map.get(letter);
        }
        return current.endOfWord;
    }
}


let st=new Suffix();
st.insert("abin");
console.log(st.search("in"));
// st.display()