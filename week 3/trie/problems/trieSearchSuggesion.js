class Node {
  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new Node())

      }
      node = node.children.get(char);
    }
    node.endOfWord = true;
  }
  dfs(node, str, res) {
    if (node.endOfWord) {
      res.push(str);
    }
    for (let [char, child] of node.children) {
      this.dfs(child, str + char, res);
    }
  }
  getAllWords() {
    let str = '';
    let res = []
    let node = this.root;
    this.dfs(node, str, res);
    return res;
  }
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.endOfWord;
  }
  delete(word) {
    let nodeStack = [];
    let current = this.root;
    for (const char of word) {
      let node = current.children.get(char);
      if (!node) {
        return false;
      }
      nodeStack.push([current, char]);
      current = node;
    }

    if (!current.endOfWord) {
      return false
    }
    current.endOfWord = false;

    while (nodeStack.length > 0) {
      const [parentNode, char] = nodeStack.pop();
      const currentNode = parentNode.children.get(char);
      if (currentNode.children.size === 0 && !currentNode.endOfWord) {
        currentNode.children.delete(char);
      }
      else {
        break;
      }
    }
    return true;
  }

  predict(prefix) {
    let node = this.root;
    let str = "";
    let res = [];
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      str += char
      node = node.children.get(char)
    }
    this.dfs(node, str, res);

    console.log(res);
  }

}

let trie = new Trie();
let words = ["i", "like", "sam", "samsung", "mobile", "samy, samuel"];

for (const char of words) {
  trie.insert(char);
}

trie.insert('sandeep');
trie.insert('sand')
trie.delete('sand')
console.log(trie.getAllWords());
trie.predict('sam')