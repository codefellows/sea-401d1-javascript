function TreeNode(value) {
  this.value  = value;
  this.left   = null;
  this.right  = null;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function(value) {
  var node = new TreeNode(value);
  if (!this.root) {
    this.root = node;
    return;
  }

  var current = this.root;
  while(current.left && value <= current.value) {
    current = current.left;
  }

  while(current.right && value > current.value) {
    current = current.right
  }

  if (value < current.value) {
    current.left = node;
  } else {
    current.right = node;
  }
}

BST.prototype.notInsert = function(value) {
  var newNode = new TreeNode(value);
  if (!this.root) {
    this.root = newNode;
    return;
  }
  var current = this.root;
  while (current.left)
}

BST.prototype.max = function() {
  if (!this.root) return;
  var current = this.root;

  while(current.right) {
    current = current.right;
  }
  return current.value;
};

BST.prototype.min = function() {
  if (!this.root) return;
  var current = this.root;

  while(current.left) {
    current = current.left;
  }
  return current.value;
};

//recursive
BST.prototype.each = function(fn) {
  if (!this.root) return;
  function next(current) {
    fn(current);
    if(current.right) next(current.right)
    if(current.left) next(current.left)
  }
  next(this.root)
};


BST.prototype.jimEach = function() {
  if (!this.root) return;
  function traversalHelper(node) {
    if (node.left) traversalHelper(node.left);
    if (node.right) traversalHelper(node.right);
  }

  traversalHelper(this.root);
}
//Depth first
BST.prototype.eachDF = function(fn) {
  if (!this.root) return
  var nodes = [this.root];
  var current;

  while(nodes.length) {
    current = nodes.pop();
    if (current.right) nodes.push(current.right);
    if (current.left) nodes.push(current.left);
    fn(current);
  }
}

//Breadth first
BST.prototype.eachBF = function(fn) {
  if(!this.root) return;
  var nodes = [this.root];
  var current;

  while(nodes.length) {
    current = nodes.shift();
    if (current.left) nodes.push(current.left);
    if (current.right) nodes.push(current.right);
    fn(current);
  }
}


debugger;
