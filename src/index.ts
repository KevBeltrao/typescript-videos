// unknown vs any

// let a: any;
// let u: unknown;


// a.asd.asd.da.dae.dae.dea.dea.asd();
// u.asd



// u = n;

// // keys of object
// const colors = {
//   green: '#00ff00',
//   blue: '#0000ff',
// } as const;

// type ColorsMap = typeof colors;
// type ColorsNames = keyof ColorsMap;
// type HexOptions = ColorsMap[ColorsNames];

// const getColor = (color: ColorsNames): HexOptions => {
//   return colors[color];
// }
// const a = getColor('green');

// // function return type

// const sum = (a: number, b: number): number => a + b;

// // type predicates (is)
// interface Dog {
//   bark(): string;
//   name: string;
// }
// interface Cat {
//   meow(): string;
//   name: string;
// }

// const isCat = (pet: Dog | Cat): pet is Cat => 'meow' in pet;
// const isDog = (pet: Dog | Cat): pet is Dog => !isCat(pet);

// const getAnimal = (type: 'dog' | 'cat'): Dog | Cat => {
//   if (type === 'dog') {
//     return { name: 'lucky', bark: () => 'woof' };
//   }
//   return { name: 'bubbles', meow: () => 'meow' };
// }
// const animal = getAnimal('cat');

// if (isCat(animal)) {
//   animal.meow();
// }

// if (!isDog(animal)) throw new Error('Not a dog');
// animal.bark();

// discriminated unions
type Action = {
  type: 'INCREMENT' | 'DECREMENT';
} | {
  type: 'ADD_CUSTOM';
  payload: number;
};

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state + 1 };
    case 'DECREMENT':
      return { count: state - 1 };
    case 'ADD_CUSTOM':
      return { count: state + action.payload };
    default:
      return state;
  }
};
let state = 0;
const dispatch = (action: Action) => reducer(state, action);
dispatch({ type: 'ADD_CUSTOM', payload: 5 });
dispatch({ type: 'INCREMENT' });
