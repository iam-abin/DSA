class Node{
    constructor(){
        this.map=new Map();
        this.endOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root=new Node();
    }

    insert(word){
        let current=this.root;
        for(const letter of word){
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

    startsWith(word){
        let current=this.root;
        for(const letter of word){
            if(!current.map.has(letter)){
                return false;
            }
            current=current.map.get(letter);
        }
        return true;
    }
}

const t = new Trie()
t.insert("abin")
t.insert("afsal")
t.insert("abin varghese")
console.log(t.startsWith("afsa"));