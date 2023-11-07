export class Sorter {
  constructor(public collection: number[] | string) {}

  /* 
  * Direct character access not allowed with strings -> throws an error for this.collection[0]
  * Error: Index signature in type 'string | number[]' only permits reading
  * Error: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
  */

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for(let j = 0; j < length - i - 1; j++) {
        // if collection is of type number[]
        if(this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            this.collection[j] ^= this.collection[j + 1];
            this.collection[j + 1] ^= this.collection[j];
            this.collection[j] ^= this.collection[j + 1];
          }
        }

        // if collection is of type string[]
        if(typeof this.collection === 'string') {
          
        }
      }
    }
  }
}