function main(a,b){

    let firstList = new dList();
    let secondList = new dList();

    //инициализация
    firstList.add(a);
    secondList.add(b);
    firstList.add("777");
    firstList.add("888");

    //поиск вхождения значения
    console.log("Поиск вхождения значения 777");
    console.log(firstList.search1("777"));
    console.log("Поиск вхождения значения 77");
    console.log(firstList.search1("77"));

    //удаление элемента
    firstList.pop(2);

    //сложение элементов
    
    console.log(`сложение элементов ${firstList.head.data} и ${secondList.head.data}`); 
    let result = sum(prog(firstList.head.data),prog(secondList.head.data));
    console.log(result);
}

function prog(xNum){

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
    let node = new Node(value);

    if (this._length) {
        this.tail.next = node;
		this.tail.next.prev = this.tail;
		this.tail = this.tail.next;

    } else{
        this.head = node;
        this.tail = node;
    }
 
    this._length++;
 
    return node;
};


dList.prototype.search1 = function(value){
    let current = this.head;
    let fValue;
    let count = 1;
    if (this._length === 0) {
        return;
    } else{
        while (current !== null) {
            if(current.data == value){
                return count;
            } else {
                current = current.next;
                count++;
            }
        }
        return;
        
    }
}

dList.prototype.search2 = function(value){
    let current = this.head;
    let count = 1;
    if (this._length === 0) {
        return;
    } else{
        while (current !== null) {
            if(count === value){
                return current;
            } else {
                current = current.next;
                count++;
            }
        }
        return;
        
    }
}

dList.prototype.pop = function(position){
    let temp = this.search2(position);
    let current = this.head;
    count = 1;
    if(this._length === 0 || position < 1 || position > this._length) {
        console.log("Удаление невозможно. Элемента нет");
    }
        
    // удалить первое значение
    if (position === 1) {
        this.head = current.next;

        // существует второй узел
        if (!this.head) {
            this.head.prev = null;
        // второго узла не существует
        } else {
            this.tail = null;
        }

    //последний узел удален
    } else if (position === this._length) {
        this.tail = this.tail.prev;
        this.tail.next = null;
    //средний узел удален
    } else {
        while (count < position) {
            current = current.next;
            count++;
        }
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
    }

    this._length--;   
}


main('123','456');


