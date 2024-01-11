// Array iterator
const carCollections = [
    { name: 'Audi', color: 'black' },
    { name: 'BMW', color: 'white' },
    { name: 'Mercedes', color: 'silver' },
    { name: 'Ferrari', color: 'red' },
    { name: 'Lamborghini', color: 'yellow' },
];

const carCollections2 = ['Audi', 'BMW', 'Mercedes', 'Ferrari', 'Lamborghini'];

interface carIteratorInterface {
    next(): any;
    hasNext(): boolean;
}

class carIterator implements carIteratorInterface {
    private _collection: any[];
    private _position: number;

    constructor(collection: any[]) {
        this._collection = collection;
        this._position = 0;
    }

    next() {
        const result = this._collection[this._position];
        this._position += 1;
        return result;
    }

    hasNext() {
        return this._position < this._collection.length;
    }
}


const iterator = new carIterator(carCollections2);
const iterator2 = new carIterator(carCollections);

while (iterator.hasNext()) {
    console.log(iterator.next());
}

while (iterator2.hasNext()) {
    console.log(iterator2.next());
}

// Output:
// { name: 'Audi', color: 'black' }
// { name: 'BMW', color: 'white' }
// { name: 'Mercedes', color: 'silver' }
// { name: 'Ferrari', color: 'red' }
// { name: 'Lamborghini', color: 'yellow' }

// Tree iterator

interface treeIteratorInterface {
    next(): any;
    hasNext(): boolean;
}

class treeIterator implements treeIteratorInterface {
    private _collection: any[];
    private _position: number;

    constructor(collection: any[]) {
        this._collection = collection;
        this._position = 0;
    }

    next() {
        const result = this._collection[this._position];
        this._position += 1;
        return result;
    }

    hasNext() {
        return this._position < this._collection.length;
    }
}

const treeCollections = [
    { name: 'Audi', color: 'black', children: [{ name: 'Audi1', color: 'black' }, { name: 'Audi2', color: 'black' }] },
    { name: 'BMW', color: 'white', children: [{ name: 'BMW1', color: 'white' }, { name: 'BMW2', color: 'white' }] },
    { name: 'Mercedes', color: 'silver', children: [{ name: 'Mercedes1', color: 'silver' }, { name: 'Mercedes2', color: 'silver' }] },
    { name: 'Ferrari', color: 'red', children: [{ name: 'Ferrari1', color: 'red' }, { name: 'Ferrari2', color: 'red' }] },
    { name: 'Lamborghini', color: 'yellow', children: [{ name: 'Lamborghini1', color: 'yellow' }, { name: 'Lamborghini2', color: 'yellow' }] },
];

const iteratorTree = new treeIterator(treeCollections);

while (iteratorTree.hasNext()) {
    console.log(iteratorTree.next());
}