// // function
// const sort = <T>(list: T[]) => {
//   return list.sort();
// };

// sort([1, 2, 3])
// sort(['1', '2', 3, true])

// // interfaces/types
// type Response<Data> = {
//   data: Data;
//   status: 'success';
// } | { status: 'error' };

// interface User {
//   name: string;
//   age: number;
// }

// type UserReponse = Response<User>;

// // restricting values params

// const func = <T extends string>(value: T): T => {
//   return value;
// };

// type Response = 'success' | 'error';

// const a = func<Response>('success');


// // object params

// const getLength = <T extends { length: number }>(value: T) => {
//   return value.length;
// };

// getLength({ age: 12, name: 'John', length: 2 });

// // strongly type reduce function

// const reduce = <T, U>(
//   list: T[],
//   reducer: (currentValue: U, currentElement: T, index: number, list: T[]) => U,
//   initialValue: U
// ): U => {
//   let currentValue = initialValue;

//   for (let i = 0; i < list.length; i++) {
//     currentValue = reducer(currentValue, list[i], i, list);
//   }

//   return currentValue;
// };

// const array = [1, 2, 3, 4];

// const sum = reduce(
//   array,
//   (currentValue, currentElement) => `${currentValue} - ${currentElement}`,
//   '',
// );

// const a: number = 1;

// type ElementType<T> = T extends (infer U)[] ? U : T;
// type Example = ElementType<string[]>;

// type Something = ElementType<typeof a>;

// // Template literals
// type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
// type Endpoint<Method extends HTTPMethod> = `${Method} /${string}`;
// type GetSomething = Endpoint<'GET'>;
// const getUsers: GetSomething = 'GET /users';

// type ResponseStatus = 'success' | 'error';  
// type ResponseBody = {
//   [key in ResponseStatus as `${key}Message`]: string;
// };
// const response: ResponseBody = {
//   successMessage: 'requested successully!!!',
//   errorMessage: 'something went wrong :(',
// };

// const text = 'a|b|c'.split('|');

// type Split<S extends string, Delimiter extends string> = 
//   S extends `${infer Start}${Delimiter}${infer Rest}` ? [Start, ...Split<Rest, Delimiter>] : [S];


// type PathParts = Split<'www.example.com/home/about', '/'>;
// const pathParts: PathParts = ['www.example.com', 'home', 'about'];

// type MappedType<T> = {
//   [P in keyof T]: T[P];
// };

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// type Nullable<T> = {
//   [P in keyof T]: T[P] | null;
// };

// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };
