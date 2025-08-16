export interface Dependent {
  name: string;
  age: number | null;
}

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  dependents: Dependent[];
}
