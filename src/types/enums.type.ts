import { Roles } from "./roles";

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const person: Person = {
  name: "John",
  email: "john@gmail.com",
  password: "password",
  role: Roles.editor,
};

console.log(person);
