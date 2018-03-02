//Не доделан!!!

function main(a,b){

    var firstList = new dList("First");
    var secondList = new dList("Second");

    firstList.add(a);
    secondList.add(b);

    let result = sum(prog(firstList.head.data),prog(secondList.head.data));
    console.log(result);
}

function prog(xNum){
    //newNum = Number(String(xNum).split('').reverse().join(''));
    //console.log(newNum);
    return String(xNum).split('').reverse();
}


function sum(x,y){
    let x1 = Number(x.reverse().join(''));
    let y1 = Number(y.reverse().join(''));
    let xy = String(x1 + y1);
    return prog(xy);
}


function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;

}

function dList(){
    this._length = 0;
    this.head = null;
    this.tail= null;
}

dList.prototype.add = function(value) {
    var node = new Node(value);

    if (this._length) {
        this.tail.next = this.tail;
        node.prev = this.tail;
        this.tail = node;
    } else{
        this.head = node;
        this.tail = node;
    }
 
    this._length++;
 
    return node;
};

main('123','456');