//1시간 10분 - 76.9

class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || [];
  }

  contains(node) {
    return Boolean(this.nodes[node]);
  }

  removeNode(node) {
    if (this.contains(node)) {
      delete this.nodes[node];
    }
  }

  hasEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      if (
        this.nodes[fromNode].includes(toNode) &&
        this.nodes[toNode].includes(fromNode)
      )
        return true;
    }
    return false;
  }

  addEdge(fromNode, toNode) {
    this.nodes[fromNode].push(toNode);
  }

  removeEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      if (this.hasEdge(fromNode, toNode)) {
        const toInFromIdx = this.nodes[fromNode].indexOf(toNode);
        const fromInToIdx = this.nodes[toNode].indexOf(fromNode);
        this.nodes[fromNode].splice(toInFromIdx, 1);
        this.nodes[toNode].splice(fromInToIdx, 1);
      }
    }
  }
}

const divideAmount = (enroll, amount, graph, sellerValue, mount) => {
  let myEarn = Math.ceil(amount * 0.9);
  let passEarn = amount - myEarn;
  if (amount * 0.1 >= 1) {
    //자기자신
    mount[enroll.indexOf(sellerValue)] = myEarn;
    //부모
    mount[enroll.indexOf(graph.nodes[sellerValue][0])] = passEarn;
  }
  return amount - myEarn;
};

function solution(enroll, referral, seller, amount) {
  var answer = [];
  let mount = [];
  let real = [];
  const graph = new Graph();
  enroll.map((seller) => {
    graph.addNode(seller);
    mount.push(0);
    real.push(0);
  });
  graph.addNode("-");
  referral.map((ref, i) => {
    graph.addEdge(enroll[i], ref);
  });
  seller.map((sellerName, i) => {
    let sellerValue = sellerName;
    let amounttt = amount[i] * 100;
    while (1) {
      const rest = divideAmount(enroll, amounttt, graph, sellerValue, mount);
      amounttt = rest;
      if (graph.nodes[sellerValue][0] !== "-") {
        sellerValue = graph.nodes[sellerValue][0];
      } else {
        break;
      }
    }

    real = real.map((realVal, i) => realVal + mount[i]);
    real.forEach((_, i) => {
      mount[i] = 0;
    });
  });

  return real;
}
