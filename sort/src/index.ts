import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([9, 4, -7, 3, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('styaTUbjTU');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(4);
linkedList.add(-6);
linkedList.add(9);
linkedList.add(45);
linkedList.add(-77);
linkedList.add(0);
linkedList.sort();
linkedList.print();