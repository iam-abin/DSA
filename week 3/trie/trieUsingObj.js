class Node{
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let current = this.root
        for(const char of word){
            if(!current.children[char]){
                current.children[char] = new Node()
            }
            current = current.children[char]
        }
        current.endOfWord = true
    }

    search(word){
        let current = this.root
        for(const char of word){
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }
        return current.endOfWord
    }

    startsWith(word){
        let current = this.root
        for(const char of word){
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }
        return true
    }
}

const t = new Trie()
t.insert("abin")
t.insert("abin varghese")
console.log(t.search("abin varghese"));