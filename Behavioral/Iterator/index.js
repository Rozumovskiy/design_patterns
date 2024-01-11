// Array iterator
// const carCollections = [
//     { name: 'Audi', color: 'black' },
//     { name: 'BMW', color: 'white' },
//     { name: 'Mercedes', color: 'silver' },
//     { name: 'Ferrari', color: 'red' },
//     { name: 'Lamborghini', color: 'yellow' },
// ];
var treeIterator = /** @class */ (function () {
    function treeIterator(collection) {
        this._collection = collection;
        this._position = 0;
    }
    treeIterator.prototype.next = function () {
        var result = this._collection[this._position];
        this._position += 1;
        return result;
    };
    treeIterator.prototype.hasNext = function () {
        return this._position < this._collection.length;
    };
    return treeIterator;
}());
var treeCollections = [
    { name: 'Audi', color: 'black', children: [{ name: 'Audi1', color: 'black' }, { name: 'Audi2', color: 'black' }] },
    { name: 'BMW', color: 'white', children: [{ name: 'BMW1', color: 'white' }, { name: 'BMW2', color: 'white' }] },
    { name: 'Mercedes', color: 'silver', children: [{ name: 'Mercedes1', color: 'silver' }, { name: 'Mercedes2', color: 'silver' }] },
    { name: 'Ferrari', color: 'red', children: [{ name: 'Ferrari1', color: 'red' }, { name: 'Ferrari2', color: 'red' }] },
    { name: 'Lamborghini', color: 'yellow', children: [{ name: 'Lamborghini1', color: 'yellow' }, { name: 'Lamborghini2', color: 'yellow' }] },
];
var iteratorTree = new treeIterator(treeCollections);
while (iteratorTree.hasNext()) {
    console.log(iteratorTree.next());
}
