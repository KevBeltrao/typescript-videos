// // Possibly null or undefined
// const a = localStorage.getItem('example');

// if (a === null) throw new Error('Item not found');

// a.toLowerCase();


// // incompatible types

// interface Person {
//   name: string;
//   age: number;
// }

// const logPeople = (people: Person[]) => {
//   console.log(people.map(person => person.name).join(', '));
// };

// const people1: Person[] = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 20 },
// ];
// const people = [
//   ...people1,
//   { name: 5, age: 30 } satisfies Person,
// ];

// logPeople(people);

// // unknowns and errors
// try {
//   throw new Error('Something went wrong');
//   if (error instanceof Error) {
//     console.log(error.message);
//   }

//   if (typeof error === 'object' && error && 'message' in error) {
//     console.log(error.message);
//   }
// }

